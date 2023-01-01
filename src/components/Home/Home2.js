import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> HTML, CSS, JavaScript and ReactJS. </b>
                            </i>
                            <br />
                            <br />
                            As a person who is not afraid of difficulties at work, {" "} 
                            <i>
                                <b className="purple">ready</b>
                            </i> to learn new knowledge everytime everywhere.
                            <br />
                            <br />
                            <i>
                                <b className="purple">An active person</b>
                            </i> at work, {" "}
                            <i>
                                <b className="purple">ready to work overtime</b>
                            </i> if the company needs it.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/adamwilling2002/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillFacebook />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/adamwilling"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/adamwilling2002/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
