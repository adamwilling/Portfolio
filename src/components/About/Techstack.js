import React from "react"
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiReactrouter,
	SiBootstrap,
	SiSass,
	SiTailwindcss,
	SiRedux,
	SiAxios,
	SiSpring,
	SiMicrosoftsqlserver,
	SiMysql,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>Master the basic of HTML.</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiHtml5 />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>Master the basic of CSS.</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiCss3 />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>Experience in writing SASS.</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiSass />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Experience in using and customizing Bootstrap Framework.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiBootstrap />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Experience in using and customizing TailwindCSS Framework.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiTailwindcss />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>Master the basic of JavaScript.</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiJavascript />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Proficient in ReactJS: Experienced in developing dynamic and
							responsive web applications using ReactJS. Familiar with Formik
							for form handling.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiReact />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Proficient in integrating APIs using Axios, enabling seamless
							communication between the front-end application and the server.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiAxios />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Experienced in implementing client-side routing and navigation
							using React Router Dom for seamless user experience.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiReactrouter />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Skilled in state management using Redux Toolkit, enabling
							efficient data flow and application-wide state synchronization.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiRedux />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Strong foundation in Java and object-oriented programming.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<FaJava />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Experience in developing APIs using Spring Boot, including Spring
							Web, Spring Security, and Spring JPA.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiSpring />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Proficient in writing SQL queries for data retrieval and
							manipulation in Microsoft SQL Server.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiMicrosoftsqlserver />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Proficient in writing SQL queries for data retrieval and
							manipulation in MySQL.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiMysql />
				</Col>
			</OverlayTrigger>
		</Row>
	)
}

export default Techstack
