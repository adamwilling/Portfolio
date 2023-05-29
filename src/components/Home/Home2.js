import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import myImg from "../../Assets/avatar.svg"
import Tilt from "react-parallax-tilt"
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import {
	FaLaptopCode,
	FaCogs,
	FaLightbulb,
	FaUsers,
	FaRocket,
	FaChartLine,
} from "react-icons/fa"

function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-12' style={{ textAlign: "justify" }}>
									<h1 className='display-4'>
										LET ME <span className='text-primary'>INTRODUCE</span>{" "}
										MYSELF
									</h1>
									<p className='lead'>
										<FaLaptopCode /> I am a highly motivated and skilled
										professional seeking new opportunities to contribute my
										expertise in software development. With a strong foundation
										in frontend technologies such as HTML, SCSS, Bootstrap,
										TailwindCSS, JavaScript, and ReactJS, I specialize in
										building responsive and user-friendly web applications.
									</p>
									<p className='lead'>
										<FaCogs /> In addition to my frontend skills, I am
										proficient in backend development using object-oriented
										programming and Java Spring Boot framework, including Spring
										Web, Spring Security, and Spring JPA. I have experience
										working with databases like SQL Server and MySQL.
									</p>
									<p className='lead'>
										<FaLightbulb /> I am passionate about continuously expanding
										my knowledge and staying up-to-date with the latest
										technologies in both frontend and backend development. As a
										dedicated and detail-oriented individual, I thrive in
										challenging work environments and enjoy solving complex
										problems.
									</p>
									<p className='lead'>
										<FaUsers /> In addition to my technical skills, I am a
										strong communicator and work well in collaborative team
										settings. I am friendly, sociable, and cheerful, and always
										willing to go the extra mile to ensure the success of a
										project.
									</p>
									<p className='lead'>
										If you are looking for a <FaRocket /> dynamic and{" "}
										<FaChartLine /> driven developer who can deliver exceptional
										results, I would love to discuss how my skills and
										experiences align with your organization's goals.
									</p>
									<p className='lead'>
										Please feel free to reach out to me to explore potential
										opportunities or to learn more about my qualifications.
									</p>
								</div>
							</div>
						</div>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img src={myImg} className='img-fluid' alt='avatar' />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className='purple'>connect </span>with me
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://www.facebook.com/adamwilling2002/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillFacebook />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://github.com/adamwilling'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/adamwilling2002/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillLinkedin />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}
export default Home2
