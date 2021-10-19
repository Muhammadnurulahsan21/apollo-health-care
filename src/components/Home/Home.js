import React, { useEffect, useState } from "react";
import "./Home.css";
import img01 from "../../img/01.jpg";
import img02 from "../../img/02.jpg";
import img03 from "../../img/03.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../img/icon-img-1.webp";
import img2 from "../../img/icon-img-2.webp";
import img3 from "../../img/icon-img-3.webp";
import img4 from "../../img/icon-img-4.webp";
import { Carousel, } from "react-bootstrap";

import dep1 from "../../img/01.webp";
import dep2 from "../../img/02.png";
import dep3 from "../../img/03.webp";
import dep4 from "../../img/04.png";
import dep5 from "../../img/05.webp";
import dep6 from "../../img/06.webp";
import dep7 from "../../img/07.png";
import dep8 from "../../img/08.webp";
import dep9 from "../../img/09.webp";
import dep10 from "../../img/10.png";
import dep11 from "../../img/11.png";
import dep12 from "../../img/12.png";

import bed01 from "../../img/Patient_bed 01.png";
import bed02 from "../../img/Patient_bed 02.png";

import doc01 from "../../img/doc1.jpg";
import doc02 from "../../img/doc2.jpg";
import doc03 from "../../img/doc3.jpg";
import doc04 from "../../img/doc4.jpg";
import HomeServicesCard from "../HomeServicesCard/HomeServicesCard";

const Home = () => {
  const [homeServicesCards, setHomeServicesCard] = useState([]);
  useEffect(() => {
    fetch("/homeCardServices.json")
      .then((res) => res.json())
      .then((data) => setHomeServicesCard(data));
  }, []);
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

      <div className="container p-5 mb-3 text-start">
        <h1>Quality</h1>
        <hr />
        <div className="d-flex pt-5">
          <div className="ps-4">
            <img src={img1} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Experienced Physicians</h5>
            <h6 class="fw-light pe-3">
              Your health is your most important asset. You should entrust it
              only to the best professionals.
            </h6>
          </div>
          <div className="ps-4">
            <img src={img2} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Personalized Treatment</h5>
            <h6 class="fw-light pe-4">
              Treatment choices perfectly match your goals of treatment
              complications with early intervention.
            </h6>
          </div>
          <div className="ps-4">
            <img src={img3} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Quality and Safety</h5>
            <h6 class="fw-light pe-4">
              All team members at Medical Center have been trained thoroughly to
              assist in any situation.
            </h6>
          </div>
          <div className="ps-4">
            <img src={img4} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Immediate Service</h5>
            <h6 class="fw-light ">
              Your treatment plan is designed for steady progress, with every
              phase promptly implemented.
            </h6>
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
      <div className="container p-5 mb-3 text-start">
        <h1>Our All Services</h1>
        <hr />
        <div className="d-flex pt-5 ps-5">
          <div className="ps-4">
            <img src={dep1} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Neurology</h5>
            <h6 class="fw-light pe-3">
              Treatment perfectly is match your goals.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep2} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Traumotology</h5>
            <h6 class="fw-light pe-3">
              The branch of surgery that injured patients.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep3} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Nephrology</h5>
            <h6 class="fw-light pe-3">
              Nephrology is a specialty of adult internal medicine.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep4} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Cardiology</h5>
            <h6 class="fw-light pe-3">
              Cardiology is a branch of that the disorders.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep5} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Pulmonary</h5>
            <h6 class="fw-light pe-3">
              Pulmonary hypertension high pressure the blood.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep6} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Births</h5>
            <h6 class="fw-light pe-3">
              An Act to provide for voluntary Registration.
            </h6>
          </div>
        </div>
        <div className="d-flex pt-5 ps-5">
          <div className="ps-4">
            <img src={dep7} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Gynaecology</h5>
            <h6 class="fw-light pe-3">Gynaecology the with medical health.</h6>
          </div>
          <div className="ps-4">
            <img src={dep8} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Dental</h5>
            <h6 class="fw-light pe-3">
              The field of dentistry dental medicine teeth.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep9} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">X-ray</h5>
            <h6 class="fw-light pe-3">
              Most X-rays have a wavelength from 10.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep10} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">Pregnancy</h5>
            <h6 class="fw-light pe-3">Pregnancy, also is the time during.</h6>
          </div>
          <div className="ps-4">
            <img src={dep11} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">For disabled</h5>
            <h6 class="fw-light pe-3">
              People with disabilities are, first and foremost, people.
            </h6>
          </div>
          <div className="ps-4">
            <img src={dep12} alt="" />
            <h5 className="pb-2 pt-2 pe-2 fw-normal">NMR</h5>
            <h6 class="fw-light pe-3">
              NMR an abbreviation Nuclear Resonance.
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-5 my-5">
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src={bed01} alt="First slide" />
              <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start">
                <h1 className="text-dark fw-normal">
                  Our Hospital Special Bed
                </h1>
                <h3 className="text-dark fw-light ">
                  A hospital bed or hospital cot is a bed specially <br />{" "}
                  designed for hospitalized patients or others in <br /> need of
                  some form of health care.
                </h3>
                <button
                  type="button"
                  className="btn btn-outline-dark py-3 px-4 m-3 me-5"
                >
                  View More
                </button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bed02} alt="Second slide" />

              <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start">
                <h1 className="text-dark fw-normal">
                  Our Hospital Special Bed
                </h1>
                <h3 className="text-dark fw-light ">
                  A hospital bed or hospital cot is a bed specially <br />{" "}
                  designed for hospitalized patients or others in <br /> need of
                  some form of health care.
                </h3>
                <button
                  type="button"
                  className="btn btn-outline-dark py-3 px-4 m-3 me-5"
                >
                  View More
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div>
        <div className="container pb-5 mb-4  text-start">
          <h1>Our Medical Specialists</h1>
          <hr />
          <div className="d-flex pt-5 ps-5">
            <div className="ps-4">
              <img width="270px" height="270px" src={doc01} alt="" />
              <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
                CONSULTING DOCTOR
              </h6>
              <h6 class="fw-bold pe-3">Dr. Sarah Johnson</h6>
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> +800 852 45 64
              </span>{" "}
              <br />
              <span className="text-secondary ">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                sarahjohnson@ahc.com
              </span>
            </div>
            <div className="ps-4">
              <img width="270px" height="270px" src={doc02} alt="" />
              <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
                DENTAL HYGIENIST
              </h6>
              <h6 class="fw-bold pe-3">Dr. Greg House</h6>
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> +800 741 45 57
              </span>{" "}
              <br />
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                greghouse@ahc.com
              </span>
            </div>
            <div className="ps-4">
              <img width="270px" height="270px" src={doc03} alt="" />
              <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
                PEDIATRICIAN
              </h6>
              <h6 class="fw-bold pe-3">Dr. Marta Stewart</h6>
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> +800 963 45 67
              </span>{" "}
              <br />
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                martastewart@ahc.com
              </span>
            </div>
            <div className="ps-4">
              <img width="270px" height="270px" src={doc04} alt="" />
              <h6 className="pb-2 pt-2 pe-2 fw-normal text-secondary">
                CARDIAC SURGEON
              </h6>
              <h6 class="fw-bold pe-3">Dr. Night Shyamalan</h6>
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> +800 258 45 65
              </span>{" "}
              <br />
              <span className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                nightshyamalan@ahc.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-start">
        <h1>Our Popular Services</h1>
        <hr />
        <div className="container mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {homeServicesCards.map((homeServiceCard) => (
            <HomeServicesCard key={homeServiceCard.id} homeServiceCard={homeServiceCard}></HomeServicesCard>
          ))}
        </div>
      </div>  
      </div>
    </div>
  );
};

export default Home;
