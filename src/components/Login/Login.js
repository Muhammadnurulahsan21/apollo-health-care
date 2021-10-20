import React from "react";
import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginUser from "./../../img/loginuser.png";
import loginImg from "./../../img/login.jpg";

import gImg from "./../../img/google.png";
import fbImg from "./../../img/github.png";
import gitImg from "./../../img/facebook.png";

const Login = () => {
  return (
    <div className="custom-margin pt-3 d-flex justify-content-center">
      <div>
        <Container className="mt-3">
          <Row>
            <Col className=" ms-5" lg={4} md={6} sm={12}>
              <div className="text-center pb-2">
                <img height="100px" width="150px" src={loginUser} alt="" />
              </div>
              <Form>
                <Form.Group
                  className="mb-2 text-start"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email Address" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-2 text-start"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <div>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                  </div>
                  <div className=" text-dark">
                    <Link>Need an Account?</Link> <br />
                    <Link>Please Sign up!</Link>
                  </div>
                </div>

                <Button className="btn btn-secondary py-2 px-5 mb-3 mt-3 mt-2">
                  Login
                </Button>
                <br />

                <div className=" tex-center mb-0">
                  <p>OR Login With</p>
                </div>

                <div className="">
                  <button
                    // onClick={() => {
                    //   signInWithGoogle()
                    //     .then((result) => {
                    //       setUser(result.user);
                    //       history.push(redirect);
                    //     })
                    //     .catch((err) => {
                    //       setError(err.message);
                    //     });
                    // }}
                    className="btn"
                  >
                    <img src={gImg} width="46px" alt="google-icon" />
                  </button>
                  <button
                    // onClick={() => {
                    //   signInWithFacebook()
                    //     .then((result) => {
                    //       setUser(result.user);
                    //       history.push(redirect);
                    //     })
                    //     .catch((err) => {
                    //       setError(err.message);
                    //     });
                    // }}
                    className="btn"
                  >
                    <img width="50px" src={fbImg} alt="facebook-icon" />
                  </button>
                  <button
                    // onClick={() => {
                    //   signInWithGithub()
                    //     .then((result) => {
                    //       setUser(result.user);
                    //       history.push(redirect);
                    //     })
                    //     .catch((err) => {
                    //       setError(err.message);
                    //     });
                    // }}
                    className="btn"
                  >
                    <img width="55px" src={gitImg} alt="github-icon" />
                  </button>
                </div>
              </Form>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <img
                className="ms-5 ps-5"
                height="550px"
                width="650px"
                src={loginImg}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
