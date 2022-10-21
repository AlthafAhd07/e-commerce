import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ value, trackBar }) => {
  const location = useLocation();

  const activeRef = useRef();

  const currentPath = location.pathname;

  // This variable is used to get back the trackBar when if user hovered is not the active Route
  const prevTrackState = {
    left: 0,
    width: 0,
  };

  function changeTrackState(left, width) {
    trackBar.current.style.left = left;
    trackBar.current.style.width = width;
  }

  // to Move the track to the active path
  function activePath() {
    if (currentPath === `/${value}`) {
      changeTrackState(
        activeRef.current.offsetLeft + "px",
        activeRef.current.clientWidth + "px"
      );
    }
  }

  // point the trackBar in the firstRender and When we navigate to an other Route(path)
  // handle the trackBar when resizing the screen
  // handle the trackBar when the route is not match with any links
  useEffect(() => {
    if (
      !["/", "/collections", "/men", "/women", "/about"].includes(currentPath)
    ) {
      changeTrackState("15%", 0);
      return;
    }
    if (currentPath === `/${value}`) {
      function updateSize() {
        activePath();
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }
  }, [currentPath]);

  const mouseEnterFun = (e) => {
    if (`/${value}` !== currentPath) {
      prevTrackState.left = trackBar.current.style.left;
      prevTrackState.width = trackBar.current.style.width;
    }
    changeTrackState(`${e.target.offsetLeft}px`, `${e.target.clientWidth}px`);
  };

  function mouseLeaveFun() {
    if (currentPath !== `/${value}`) {
      changeTrackState(prevTrackState.left, prevTrackState.width);
    }
  }
  return (
    <Link to={`/${value}`} style={{ textDecoration: "none" }}>
      <li
        onMouseEnter={mouseEnterFun}
        onMouseLeave={mouseLeaveFun}
        ref={activeRef}
      >
        {value === "" ? "home" : value}
      </li>
    </Link>
  );
};

export default NavLink;