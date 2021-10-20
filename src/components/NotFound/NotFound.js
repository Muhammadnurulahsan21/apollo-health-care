import React from "react";
import "./NotFound.css";
import backgroundImg from "./../../img/404.jpg";
import { useHistory } from "react-router";
const NotFound = () => {
  const history = useHistory();
  return (
    <div  className="custom-margin pt-1" >
      <div className="d-flex custom-margin mt-5 flex-column text-secondary 
      justify-content-center align-items-center ">
      <div className="ps-5">
        <img height="400px" width="1200px" src={backgroundImg} alt="" />
      </div>
      <h1 className=" m-4">
        OOPS...!!! We're broken
      </h1>
      <h5>Seems like you have assembled the page <br /> incorrectly.</h5>
      <div>
        <button
          onClick={() => history.push("/home")}
          type="button"
          className="btn fs-5 btn-outline-secondary my-5 py-2 px-4"
        >
          Go back to our Homepage
        </button>
      </div>
      </div>
    </div>
  );
};

export default NotFound;
