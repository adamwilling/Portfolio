import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import cmd from "../../Assets/Projects/cmd.jpeg"
import devCMD from "../../Assets/Projects/devcomaydorm.tech.jpeg"

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
                            imgPath={devCMD}
                            isBlog={false}
                            title="Ký Túc Xá Cỏ May"
                            description="KTX Cỏ May là một ký túc xá hiện đại và rộng rãi nằm trong khuôn viên của Trường Đại học Nông Lâm Thành phố Hồ Chí Minh, với tổng diện tích hơn 2.600 mét vuông, gồm bốn tầng và 54 phòng cho sinh viên. Ký túc xá nhằm mục đích cung cấp môi trường sống và học tập thuận lợi cho sinh viên nghèo có mong muốn theo đuổi giáo dục đại học và đóng góp cho sự phát triển của đất nước. Các phòng được trang bị bốn giường đôi, chăn ga miễn phí và két cá nhân, cũng như nhà tắm và các tiện nghi cơ bản khác. Ngoài ra, ký túc xá cũng cung cấp trợ cấp ăn uống hàng tuần, hỗ trợ toàn bộ học phí cho học kỳ đầu tiên và các loại hỗ trợ tài chính khác cho sinh viên có thành tích học tập tốt."
                            demoLink="https://devcomaydorm.tech/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cmd}
                            isBlog={false}
                            title="CMD | Ký Túc Xá Cỏ May"
                            description="Tại KTX Cỏ May, sinh viên là người đóng góp chính trong việc quản lý, điều hành các hoạt động đoàn đội, bảo trì, sửa chữa KTX, tổ chức sự kiện,… của sinh viên cũng như của KTX. Vì vậy, em đã tiến hành xây dựng ứng dụng web để quản lý sinh viên nội trú theo quy trình quản lý của Ký túc xá Cỏ May."
                            demoLink="http://cmd.ktxcomay.com.vn/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects