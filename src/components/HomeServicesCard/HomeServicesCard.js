import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeServicesCard.css";

const HomeServicesCard = (props) => {
  const { serviceName, medicalFee, testFee, description, img, key } =
    props.homeServiceCard || {};

  return (
    <div className="col">
      <div className="card p-2 m-3">
        <img src={img} height="250px" className="card-img-top" alt=""/>
        <div className="card-body">
        <h5 className="card-title fw-bold "><span  className="fw-bold">Service Name:</span> {serviceName}</h5>
          <p className="card-text mb-2 "><span  className="fw-bold">Full Service Fee:</span> {medicalFee}</p>
          <p className="card-text mb-2 "><span  className="fw-bold">Medical Test Fee:</span> {testFee}</p>
          <p className="card-text"><span className="fw-bold">Description: </span>{description}</p>
          <NavLink to={`/services/${key}`} className="btn btn-secondary">Make an Appointment</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesCard;
