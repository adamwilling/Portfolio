import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Particle from "../Particle"
import pdfEnglish from "../../Assets/CV Nguyễn Võ Song Toàn - FullStack Developer.pdf"
import pdfVietnamese from "../../Assets/CV Nguyễn Võ Song Toàn - FullStack Developer - Vietnamese.pdf"
import { AiOutlineDownload } from "react-icons/ai"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeEnglishLink =
	"https://raw.githubusercontent.com/adamwilling/Portfolio/main/src/Assets/CV Nguyễn Võ Song Toàn - FullStack Developer.pdf"
const resumeVietnameseLink =
	"https://raw.githubusercontent.com/adamwilling/Portfolio/main/src/Assets/CV Nguyễn Võ Song Toàn - FullStack Developer - Vietnamese.pdf"

function ResumeNew() {
	const [width, setWidth] = useState(1200)

	useEffect(() => {
		setWidth(window.innerWidth)
	}, [])

	return (
		<div>
			<Container fluid className='resume-section'>
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant='primary'
						href={pdfEnglish}
						target='_blank'
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV English
					</Button>
				</Row>

				<Row className='resume'>
					<Document
						file={resumeEnglishLink}
						className='d-flex flex-column justify-content-center align-items-center'
					>
						<Page
							pageNumber={1}
							scale={width > 786 ? 1.7 : 0.6}
							className='col'
						/>
						<Page
							pageNumber={2}
							scale={width > 786 ? 1.7 : 0.6}
							className='col'
						/>
					</Document>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant='primary'
						href={pdfEnglish}
						target='_blank'
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV English
					</Button>
				</Row>
			</Container>
			<Container fluid className='resume-section'>
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant='primary'
						href={pdfVietnamese}
						target='_blank'
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Tải xuống CV Tiếng Việt
					</Button>
				</Row>

				<Row className='resume'>
					<Document
						file={resumeVietnameseLink}
						className='d-flex flex-column justify-content-center align-items-center'
					>
						<Page
							pageNumber={1}
							scale={width > 786 ? 1.7 : 0.6}
							className='col'
						/>
						<Page
							pageNumber={2}
							scale={width > 786 ? 1.7 : 0.6}
							className='col'
						/>
					</Document>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant='primary'
						href={pdfVietnamese}
						target='_blank'
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Tải xuống CV Tiếng Việt
					</Button>
				</Row>
			</Container>
		</div>
	)
}

export default ResumeNew
