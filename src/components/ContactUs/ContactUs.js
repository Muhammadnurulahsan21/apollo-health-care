import React, { useState } from "react";
import "./ContactUs.css";
import bgImg from "./../../img/contactside.jpg";
import phoneImg from "./../../img/phone.webp";
import emailImg from "./../../img/email.webp";
import locationImg from "./../../img/location.webp";
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';

const ContactUs = () => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div className="custom-margin">
      <div className="d-flex justify-content-between">
        <div className="bg-white p-5 text-dark text-start about1-div">
          <h2 className="pt-3 ps-5 ">Contact Details</h2> <hr />
          <h5 className="pt-1 ps-5 fw-light">
            {" "}
            Our Medical Center the preferred choice for diplomats <br /> and
            employees from 64 embassies, consulates and UN <br /> agencies, as
            well as private patients from over 60 countries.
          </h5>
          <div className="d-flex ps-5 pt-4">
            <div className="m-2">
              <img src={phoneImg} alt="" />
            </div>
            <div className="">
              <h6 className="text-info fs-5 fw-normal">Emergency Cases</h6>
              <h6 className=" fs-3 fw-normal">800 123 45 67</h6>
            </div>
          </div>
          <div className="d-flex ps-5 pt-4">
            <div className="m-2">
              <img src={emailImg} alt="" />
            </div>
            <div className="">
              <h6 className="text-info fs-5 fw-normal">Emai</h6>
              <h6 className=" fs-3 fw-normal">info@apollohealthcare.com</h6>
            </div>
          </div>
          <div className="d-flex ps-5 pt-4">
            <div className="m-2">
              <img src={locationImg} alt="" />
            </div>
            <div className="">
              <h6 className="text-info fs-5 fw-normal">Address</h6>
              <h6 className=" fs-3 fw-normal">
                Apollo health Care, New Delhi.
              </h6>
            </div>
          </div>
        </div>
        <div className="about2-div">
          <img width="759px" height="550px" src={bgImg} alt="" />
        </div>
      </div>

   
    <div>
      <div className="contact-text text-white">
        <h1 className="">Contact Us</h1>
        <h2>Google Map in Our Location</h2>
      </div>
      <div className="google-map">
        <iframe
          title="google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9204205667393!2d77.28155496489124!3d28.542111582453497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6ad13eaaa99%3A0x3bc07ad476bc6d77!2sIndraprastha%20Apollo%20Hospitals%2C%20New%20Delhi!5e0!3m2!1sen!2sbd!4v1634737362271!5m2!1sen!2sbd"
          width="1240"
          height="600"
        ></iframe>
      </div>
      <Form
        className="container p-5"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Your Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter Your City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter Your State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Groug className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Groug>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>

    </div>
  );
};

export default ContactUs;
