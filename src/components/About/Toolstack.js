import React from "react"
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import {
	SiVisualstudiocode,
	SiPostman,
	SiEclipseide,
	SiMysql,
	SiGit,
} from "react-icons/si"

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Proficient in utilizing Visual Studio Code for ReactJS and Spring
							Boot application development.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiVisualstudiocode />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Experienced in using Postman for API testing and validation for
							both frontend and backend applications
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiPostman />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Skilled in utilizing Eclipse for Java application development.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiEclipseide />
				</Col>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip>
						<strong>
							Have experience using Git for source code management and
							collaboration within a team environment.
						</strong>
					</Tooltip>
				}
			>
				<Col xs={4} md={2} className='tech-icons'>
					<SiGit />
				</Col>
			</OverlayTrigger>
		</Row>
	)
}

export default Toolstack
