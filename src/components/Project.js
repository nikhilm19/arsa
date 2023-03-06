import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Uber from "../assets/uber.jpg";
import Uber1 from "../assets/uber1.jpg";
import Uber2 from "../assets/uber2.jpg";

const renderImages = (imageData) => {
	return (
		<Row className="project-module">
			{imageData.map((img) => {
				return (
					<Col xs={12} className={`project-module ${img.isMultiImage?"small-image":"full-width-image"}`} >
						<img src={img.url} className="project-module"></img>
                        {img.isMultiImage?<Col lg={6}>{img.text}</Col>:""}
					</Col>
				);
			})}
		</Row>
	);
};

const Project1 = () => {
	const projectData = {
		name: "Uber HQ",
		data: {
			main: "The Uber Headquarters is designed to encourage vibrant life on the streets of its emerging San Francisco neighborhood.",
			images: [
				{
					url: Uber1,
					isMultiImage: false,
					text: "A feature known as the Commons—a striking network of circulation and gathering spaces—will bring the life of the building into contact with the life of the streets, and allow views of the living city to serve as a continual inspiration for the creative work taking place inside.",
				},
				{
					url: Uber2,
					isMultiImage: true,
                    left:true,
					text: "A feature known as the Commons—a striking network of circulation and gathering spaces—will bring the life of the building into contact with the life of the streets, and allow views of the living city to serve as a continual inspiration for the creative work taking place inside.",
				},
				{
					url: Uber,
					isMultiImage: false,
					text: "A feature known as the Commons—a striking network of circulation and gathering spaces—will bring the life of the building into contact with the life of the streets, and allow views of the living city to serve as a continual inspiration for the creative work taking place inside.",
				},
                {
					url: Uber,
					isMultiImage: true,
                    left:false,
					text: "A feature known as the Commons—a striking network of circulation and gathering spaces—will bring the life of the building into contact with the life of the streets, and allow views of the living city to serve as a continual inspiration for the creative work taking place inside.",
				},
                {
					url: Uber,
					isMultiImage: false,
					text: "A feature known as the Commons—a striking network of circulation and gathering spaces—will bring the life of the building into contact with the life of the streets, and allow views of the living city to serve as a continual inspiration for the creative work taking place inside.",
				},
			],
			subTexts: [
				"In addition to supporting responsible development by locating it in the city near public transportation, the project’s key goal is to bring this developing area into step with the successful, human-scaled environments for which San Francisco is so famous. The 423,000 square foot project includes an eleven-story tower at 1455 Third Street and a six-story structure at 1515 Third Street, each with active facades that are part of a comprehensive approach to sustainability",
				"xyz xyz xyz Lorem ipsum",
			],
			status: {
				phase: "Completed",
				area: "123000 sf",
			},
		},
	};
	const { projectName } = useParams();
	console.log(projectName);
	return (
		<div className="project">
			<Container fluid>
				<Row className="project-text-large project-module">
					
					<Col xs={12} lg={12}>
						<span className="green-dash"></span>
					</Col>
                    
					<Col xs={12} lg={8}>
						<p className="text">
							The <strong>Uber Headquarters </strong>is designed
							to encourage vibrant life on the streets of its
							emerging San Francisco neighborhood.
						</p>
					</Col>
                    
				</Row>
                {renderImages(projectData.data.images)}
				<Row className="full-width-image project-module">
					<Col xs={12} className="project-module">
						<img src={Uber}></img>
					</Col>
					<Col xs={12} className="project-module small-image">
						<img src={Uber1}></img>
					</Col>
					<Col
						xs={12}
						className="project-module small-image multi-image-right"
					>
						<img src={Uber2}></img>
					</Col>
				</Row>
				<Row className="project-status project-module">
					<Col xs={12}>
						<span className="green-dash"></span>
					</Col>
					<Col xs={12}>
						<ul>
							<Row>
								<Col xs={12} lg={3}>
									<li>
										<span>phase</span>
										Completed
									</li>
								</Col>
								<Col xs={12} lg={9}>
									<li>
										<span>size</span>
										123,000 sf
									</li>
								</Col>
							</Row>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Project1;
