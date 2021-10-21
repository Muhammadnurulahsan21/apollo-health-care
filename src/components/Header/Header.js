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
import {
  Navbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/UseAuth.js";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="fixed-top">
      <div className="header-top-text d-flex fw-light text-white px-5 ">
        <div>
          <p className="mb-0 pt-3 pb-4 ms-4">
            <FontAwesomeIcon className="ms-3" icon={faMapMarkedAlt} size="lg" />{" "}
            Location:121 Wallstreet Street, NY , USA
          </p>
        </div>
        <div>
          <p className="mb-0 pt-3 pb-4 ps-5 ms-5">
            <FontAwesomeIcon className="ms-3" icon={faEnvelope} size="lg" />{" "}
            Email:info@apollohealthcare.com
          </p>
        </div>
        <div className="text-end">
          <p className="mb-0 pt-3 pe-3  pb-4 ps-5 ms-5">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> For emergency cases:
            800 123 45 67
          </p>
        </div>
        <div className="p-3 ms-3 ms-5">
          <FontAwesomeIcon className="ms-3" icon={faLinkedin} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faTwitter} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faFacebook} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faInstagram} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faSearch} size="lg" />

          <FontAwesomeIcon className="ms-3" icon={faShoppingCart} size="lg" />
        </div>
      </div>

      

      <div className="">
        <Navbar className="p-1 nav-color" expand="lg">
          <Container fluid>
            <Navbar.Brand className="text-success d-flex">
              <img
                src={logo}
                width="50px"
                height="50px"
                style={{ marginRight: "15px" }}
                alt="logo"
              />
              <span className="fs-2">Apollo Health Care</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
             
                <div className="custom-nav me-auto ">
                
                <NavLink className="text-success m-2 p-2 custom-navlink" to="/home">Home</NavLink>
                <NavLink className="text-success m-2 p-2 custom-navlink" to="/doctors">Doctors</NavLink>
                <NavLink className="text-success m-2 p-2 custom-navlink" to="/medicineshop">MedicineShop</NavLink>
                <NavLink className="text-success m-2 p-2 custom-navlink" to="/services">Services</NavLink>
                <NavLink className="text-success m-2 p-2 custom-navlink" to="/about">About</NavLink>
                <NavLink className="text-success m-2 p-2 custom-navlink" to="/contactus">Contact Us</NavLink>
                </div>
                {user.displayName && (
                  <Nav.Link className="fs-5 ps-4 active text-success">
                    {user.displayName}
                  </Nav.Link>
                )}  

              {!user.displayName && (
              <Nav.Link as={Link} to="/login" >
              <Button className="py-2 px-4" variant="secondary">Login</Button>
              </Nav.Link>
              )} 
              
              {!user.displayName && (
              <Nav.Link as={Link}  to="/register">
              <Button className="py-2 px-4" variant="outline-secondary">Register</Button>
              </Nav.Link>
              )}

              {user.displayName && (   
              <Nav.Link onClick={logOut}>
              <Button className="py-2 px-3" variant="secondary">Logout</Button>
              </Nav.Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>        
    </div>
  );
};















/* {!user.displayName ? (
          <>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-secondary py-2 px-4 m-3 me-2"
              >
                Login
              </button>
            </Link>

            <Link to="/register">
              <button
                type="button"
                className="btn btn-outline-secondary py-2 px-4 m-3 me-5"
              >
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <p>{user?.displayName}</p>
            <button
              type="button"
              onClick={logOut}
              className="btn btn-outline-secondary"
            >
              Log Out
            </button>
          </>
        )} */

export default Header;
