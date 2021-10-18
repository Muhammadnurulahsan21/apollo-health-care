import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faSearch,
  faShoppingCart,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../../img/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header-top-text d-flex fw-light text-white px-5">
        <div>
          <p className="mb-0 pt-3 pb-4">
            <FontAwesomeIcon className="ms-3" icon={faMapMarkedAlt} size="lg" />{" "}
            Location:121 Wallstreet Street, NY , USA
          </p>
        </div>
        <div>
          <p className="mb-0 pt-3 pb-4 ps-5">
            <FontAwesomeIcon className="ms-3" icon={faEnvelope} size="lg" />{" "}
            Email:info@apollohealthcare.com
          </p>
        </div>
        <div className="text-end">
          <p className="mb-0 pt-3  pb-4 ps-5">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> For emergency cases:
            800 123 45 67
          </p>
        </div>
        <div className="p-3 ms-3">
          <FontAwesomeIcon className="ms-3" icon={faLinkedin} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faTwitter} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faFacebook} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faInstagram} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faSearch} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faShoppingCart} size="lg" />
        </div>
      </div>

      <Navbar expand="lg">
        <Container className="mt-4 mb-4" fluid>
          <img
            src={logo}
            width="90px"
            height="90px"
            className="logo-size"
            alt=""
          />
          <Navbar.Brand href="#" className="fs-2 ps-3 text-start text-success">
            Apollo Health Care
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0 "
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home" className="fs-5 ps-4 active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/doctors" className="fs-5 ps-4 active">
                Doctors
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/medicineshop"
                className="fs-5 ps-4 active"
              >
                MedicineShop
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/departments"
                className="fs-5 ps-4 active"
              >
                Departments
              </Nav.Link>

              <Nav.Link as={Link} to="/about" className="fs-5 ps-4 active">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/contactus" className="fs-5 ps-4 active">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <button type="button" className="btn btn-secondary py-2 px-4 m-3 me-2">
          Login
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary py-2 px-4 m-3 me-5"
        >
          Register
        </button>
      </Navbar>
    </div>
  );
};

export default Header;
