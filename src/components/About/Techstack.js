import React from "react"
import { Col, Row } from "react-bootstrap"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiReactrouter, SiBootstrap, SiGit, SiCplusplus, SiCsharp } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiCplusplus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReactrouter />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaNodeJs />
            </Col>
        </Row>
    )
}

export default Techstack
