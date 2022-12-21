import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import cmd from "../../Assets/Projects/cmd.jpeg"

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cmd}
                            isBlog={false}
                            title="Co May Dormitory"
                            description="At Co May Dormitory, students are the main contributors to the management and operation of team activities, dormitory maintenance and repair, event organization, etc. of students as well as dormitories. Therefore, I proceeded to build a web application to manage boarding students according to the management process of Co May Dormitory."
                            demoLink="http://cmd.ktxcomay.com.vn/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects