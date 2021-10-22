import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "./../../img/logo.webp";
import { Button } from 'react-bootstrap';

const AppointmentPages = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Muhammadnurulahsan21/medical-data/main/services.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setService(data.find((service) => service.key === id));
      });
  }, []);
  return (
    <div className="custom-margin">
      <div>
        <div className="bg-secondary p-4 text-white">
          <h1 className="pt-2 pb-2">{service?.serviceName}</h1>
          <h5>Home / Service / <span className="fw-light">{service?.serviceName}</span></h5>
          <h2>We provide world class services.</h2>
        </div>
        <div className="bg-about-second  text-secoondary pe-4 d-flex justify-content-center p-5">
          <img height="120px" width="120px" src={logo} alt="" />
          <h3 className="pb-4 fw-normal text-white px-5 pt-4">
            Encompassing All Accessible Exclusive Medical Treatment <br />
            <span>
              <h5 className="text-start fw-light">
                We offer extensive medical procedures to outbound and inbound
                patients.
              </h5>
            </span>
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

        <div className="d-flex justify-content-between">
          <div className="bg-white p-5 text-dark text-start about1-div">
            <h2 className="ps-5 ">Service Details</h2> <hr />
            <h5 className="pt-1 ps-5 fw-light">{service?.description}</h5>
            <div className="ps-5 pt-3">
              <h6 className=" fs-4 fw-normal">
                Service Name: {service?.serviceName}
              </h6>
            </div>
            <div className="ps-5 pt-3">
              <h6 className=" fs-4 fw-normal">
                Medical Fee: {service?.medicalFee}
              </h6>
            </div>
            <div className="ps-5 pt-3">
              <h6 className=" fs-4 fw-normal">Test Fee: {service?.testFee}</h6>
            </div>
            <div className="d-flex ps-5 pt-3">
              <img src="{service?.img}" alt="" />
              <h6 className=" fs-4 fw-normal">
                Total Cost: {service?.totalCost}
              </h6>
            </div>
            <Button className="py-2 px-3 ms-5 mt-3" variant="secondary">Book an Appointment</Button>
          </div>
          <div>
            <img height="521px" src={service?.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPages;
