import React from "react";
import "./Home.css";
import img01 from "../../img/01.jpg";
import img02 from "../../img/02.jpg";
import img03 from "../../img/03.jpg";

import img1 from "../../img/icon-img-1.webp";
import img2 from "../../img/icon-img-2.webp";
import img3 from "../../img/icon-img-3.webp";
import img4 from "../../img/icon-img-4.webp";
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

      <div className="container p-5 text-start">
        <h1>Services</h1>
        <hr />
        <div className="d-flex">
        <div>
        <img src={img1} alt="" />
        <h5 className="pb-2 pt-2 pe-2 fw-normal">Experienced Physicians</h5>
        <h6 class="fw-light pe-3">Your health is your most important asset. You should entrust it only to the best professionals.</h6>
        </div>
        <div>
        <img src={img2} alt="" />
        <h5 className="pb-2 pt-2 pe-2 fw-normal">Personalized Treatment</h5>
        <h6 class="fw-light pe-3">Treatment choices perfectly match your goals of treatment complications with early intervention.</h6>
        </div>
        <div>
        <img src={img3} alt="" />
        <h5 className="pb-2 pt-2 pe-2 fw-normal">Quality and Safety</h5>
        <h6 class="fw-light pe-3">All team members at Medical Center have been trained thoroughly to assist in any situation.</h6>
        </div>
        <div>
        <img src={img4} alt="" />
        <h5 className="pb-2 pt-2 pe-2 fw-normal">Immediate Service</h5>
        <h6 class="fw-light pe-3">Your treatment plan is designed for steady progress, with every phase promptly implemented.</h6>
        </div>
        </div>
      </div>

      <div className="bg-img text-start text-white">
        <h1 className="pb-4">Welcome To Our Clinic!</h1>
        <h3 className="pb-4 fw-normal">
          We offer extensive medical procedures to outbound <br /> and inbound
          patients.
        </h3>
        <h5 className="fw-light py-3">
          Our major areas of specialization include oncology, orthopedics,{" "}
          <br />
          cardiology, IVF Treatment, urology, neurosurgery, gastroenterology,{" "}
          <br />
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
