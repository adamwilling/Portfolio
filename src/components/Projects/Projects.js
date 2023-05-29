import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import CMDManagementSystem from "../../Assets/Projects/CMDManagementSystem.jpeg"
import CoMayWebsiteImg from "../../Assets/Projects/CoMayWebsite.png"

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
                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={CoMayWebsiteImg}
                            title="Co May Website"
                            description="Co May Dormitory is a modern and spacious dormitory located within Ho Chi Minh City University of Agriculture and Forestry. With over 2,600 square meters of space, it features four floors and 54 rooms designed to provide an ideal living and studying environment for financially disadvantaged students pursuing higher education. Equipped with four double beds, complimentary bedding, personal lockers, and essential amenities, the dormitory ensures students' comfort and convenience. In addition, Co May Dormitory offers weekly meal allowances, full tuition support for the first semester, and various financial assistance programs for students with outstanding academic performance, demonstrating a commitment to supporting students' educational journey and contributing to national development."
                            demoLink="https://ktxcomay.com.vn/"
                        />
                    </Col>
                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={CMDManagementSystem}
                            title="CMD Management System"
                            description="At Co May Dormitory, students play a crucial role in managing and coordinating various activities such as student associations, maintenance and repairs, and organizing events. Recognizing this, I took the initiative to develop a web application that facilitates the internal management of resident students based on Co May Dormitory's established protocols. This application streamlines the administrative processes, enhances communication, and ensures efficient student accommodation management within Co May Dormitory."
                            demoLink="https://cmd.ktxcomay.com.vn/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects