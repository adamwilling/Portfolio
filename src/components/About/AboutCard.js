import React from "react"
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }} className="mb-0">
                        Hi Everyone, I am <span className="purple">Nguyen Vo Song Toan </span>
                        from <span className="purple"> Ho Chi Minh, Vietnam</span>
                        <br />I am a final-year student at HCMC University of Technology and Education
                        <br />I am a FullStack Developer. Seeking opportunities to gain experience and enhance skills.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Singing (especially rap)
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Listening to music
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Shuttlecock
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Badminton
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Table tennis
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Reading books
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Learn about the universe, spacetime and quantum physics
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>"I can accept failure, but I can’t accept not trying... Remember that Genius is one percent inspiration and ninety-nine percent perspiration!" </p>
                    {/* <footer className="blockquote-footer">AdamWilling</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard