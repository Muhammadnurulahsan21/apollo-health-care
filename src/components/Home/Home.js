import React from "react";
import "./Home.css";
import img01 from "../../img/01.jpg";
import img02 from "../../img/02.jpg";
import img03 from "../../img/03.jpg";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img01} alt="First slide" />
          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <h1 className="fristline-text">Bringing Health</h1>
            <h3 className="secondline-text">to life for the whole family.</h3>
            <button
              type="button"
              className="btn btn-outline-info py-3 px-4 m-3 me-5"
            >
              View Departments
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img02} alt="Second slide" />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <h1 className="fristline-text">Bringing Health</h1>
            <h3 className="secondline-text">to life for the whole family.</h3>
            <button
              type="button"
              className="btn btn-outline-info py-3 px-4 m-3 me-5"
            >
              View Departments
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img03} alt="Third slide" />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <h1 className="fristline-text">Bringing Health</h1>
            <h3 className="secondline-text">to life for the whole family.</h3>
            <button
              type="button"
              className="btn btn-outline-info py-3 px-4 m-3 me-5"
            >
              View Departments
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="bg-img text-start text-white">
        <h1 className="pb-4">Welcome To Our Clinic!</h1>
        <h3 className="pb-4 fw-normal">
          We offer extensive medical procedures to outbound <br /> and inbound
          patients.
        </h3>
        <h5 className="fw-light py-3">
          Our major areas of specialization include oncology, orthopedics, <br />
          cardiology, IVF Treatment, urology, neurosurgery, gastroenterology, <br />
          plastic surgery and many other departments.
        </h5>
        <button
          type="button"
          className="btn btn-outline-info py-3 px-4 m- me-5"
        >
          View Departments
        </button>
      </div>
    </div>
  );
};

export default Home;
