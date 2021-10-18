import React from "react";
import "./Footer.css";
import img from "./../../img/logo.png";
// import img from "../../img/img.png";
import { Button, Col, Form } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <div className="news-latter ">
        <div className="container d-flex justify-content-center px-5  text-white">
        <h2 className="px-5 mt-3">SIGN UP FOR NEWSLETTER</h2>
          <div className="px-5 flex-grow-1 d-flex g-4 ">
            <Form.Group as={Col} className="" controlId="formGridEmail">
              <Form.Control
                className="email-field w-60 shadow-none mt-3"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button variant="btn btn-outline-secondary py-2 px-4 m-3 me-2">Submit</Button>
          </div>
        </div>
      </div>
      <section className=" footer  footer-bg p-5 d-flex align-items-center justify-content-between fw-light">
        <div className="ps-5 d-flex pb-5=4">
          <div className="pt-4">
            <img src={img} width="80px" height="80px" alt="" />
          </div>
          <span className="text-white pe-5 pt-4 ps-3 text-sm-start">
            Choosing the right hospital and physician are important factors to
            consider that significantly influence a patient’s treatment. The
            preferred choice for many patients is choosing private care.
          </span>
        </div>
        <div className="col-lg- fw-light">
          <div className=" footer"></div>
        </div>
        <div className="text-white text-sm-center">
          <h5>Departments</h5>
          <hr />
          <div className="text-sm-start">
          <a href="/"> Neurology</a>
          <a href="/"> Thaumatology</a>
          <a href="/"> Gynecology</a>
          <a href="/"> Nephrolith</a>
          <a href="/"> Pulmonary</a>
          
          </div>
        </div>
        {/* <div>
        <a className="pe-5 " href="/">
              Terms of Service
            </a>
            <a href="/">License</a>
          </div>
          <div className=" footer pt-3 ps- ms-">
            <a className="me-3" href="/">
              Privacy Policy
            </a>
            <a className="me-3" href="/">
              FAQs
            </a>
            <a className="me-3" href="/">
              Sitemap
            </a>
            <a href="/">Feedback</a>
        </div> */}

        {/* <div>
            <p className="me-3 pt-5 text-white ps- ms-">
              <a href="/">© Developed By Muhammad Nurul Ahsan</a>
            </p>
          </div> */}

        <div className="col-lg-6">
          {/* <img className="img-fluid mx-auto ps-5 ms-5" src={img} alt="" /> */}
        </div>
      </section>
      <div className="footer-text text-white p-4 pe-5 align-items-center  justify-content-between fw-light">
        <span>Terms and Conditions | Privacy Policy</span>
        <div>
          <span>© 2021 Apollo Health Care . All rights reserved.</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
