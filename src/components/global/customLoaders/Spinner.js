import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../features/customLoaders/loaderSlice";
import "./spinner.css";
const Spinner = () => {
  const { loading } = useSelector(selectLoading);

  if (loading === true) {
    return (
      <div className="SpinnerWrapper">
        <div className="loadingio-spinner-spinner-hh9ssequpj9">
          <div className="ldio-gqiu1itk7k">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;
