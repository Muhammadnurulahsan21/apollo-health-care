import React from "react";
import "./About.css";
import aboutImg01 from "./../../img/a01.jpg";
import aboutImg02 from "./../../img/a02.jpg";
import aboutImg03 from "./../../img/a03.jpg";
import aboutImg04 from "./../../img/a04.jpg";
import logo from "./../../img/logo.webp";


const About = () => {
  return (
    <div className="custom-margin">
      <div className="bg-about d-flex justify-content-between">
        <div className="frist-div">
        <h1 className="pt-3 ps-5 ">Learn at Our Hospital</h1>
        <h4 className="pt-1 ps-5 ">Home / About</h4>
        </div>
        <div className="bg-secondary second-div">
            <h1 className="pt-5 ps-5 text-start mt-5 text-white" >One of the Top</h1>
            <h3 className="text-white text-start ps-5 fw-light">State Hospitals Proudly <br /> ranked among the nation's <br /> 
            best in multiple adult specialties.</h3>
        </div>
      </div>
      <div className="container pt-5 mb-5 text-center">
        <h1>Why Choose Apollo Health Care Hospital?</h1>
        <hr />
        <h5 className="text-info fw-normal">
          We provide the highest quality medical care, individualized treatment
          by the country’s leading experts, <br /> and in the shortest amount of
          time. Each patient is assigned a case manager to handle all medical
          issues.
        </h5>
        <h5 className=" fw-light">
          With a community of over 400 million users (and a majority age group
          being 18 to 29), wouldn’t you want to make sure you’re <br />
          monitoring what people are posting on social networks? Especially if
          the demographic of your audience falls in that age range.
        </h5>
        <div className="d-flex pt-5 ps-5 text-start">
          <div className="ps-4">
            <img width="270px" height="270px" src={aboutImg01} alt="" />
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              HOSPITAL WARD
            </h6>
            <h6 className="fw-bold pe-3">Department Info:</h6>
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              Our Hospital in accident and <br /> emergency departments are{" "}
              <br /> open 24 hours a day.
            </h6>
            <br />
          </div>
          <div className="ps-4">
            <img width="270px" height="270px" src={aboutImg02} alt="" />
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              CT SCANNER
            </h6>
            <h6 className="fw-bold pe-3">Department Info:</h6>
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              Contains all the  necessary <br /> equipment to CT SCAN device <br />
              such as CT Scan room.
            </h6>
            <br />
          </div>
          <div className="ps-4">
            <img width="270px" height="270px" src={aboutImg03} alt="" />
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              NURSES PORTRAIT
            </h6>
            <h6 className="fw-bold pe-3">Department Info:</h6>
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              {" "}
              The structure of the neurological <br /> an
              outpatient department, the <br /> Department of Functional Studies.
              
            </h6>
          </div>
          <div className="ps-4">
            <img width="270px" height="270px" src={aboutImg04} alt="" />
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
              SURGERY DEPARTMENT
            </h6>
            <h6 className="fw-bold pe-3">Department Info:</h6>
            <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">The choice of research subject stemmed <br /> from an encounter with a patient. the <br /> research patients with kidney failure.</h6>
            <br />
          </div>
        </div>
      </div>
      <div className="bg-about-second  text-secoondary pe-4 d-flex justify-content-center p-5">
        <img height="120px" width="120px" src={logo} alt="" />
        <h3 className="pb-4 fw-normal text-white px-5 pt-4">
        Encompassing All Accessible Exclusive Medical Treatment <br /> 
        <span>
        <h5 className="text-start fw-light">We offer extensive medical procedures to outbound and inbound patients.</h5></span>
        </h3>
              
        <div>
            
        <button
          type="button"
          className="btn btn-outline-info mt-4 py-3 px-4 pe- me-5"
        >
          View Departments
        </button>
        </div>
      </div>
    </div>
  );
};

export default About;
