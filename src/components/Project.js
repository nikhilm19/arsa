import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Uber from "../assets/uber.jpg";
import Uber1 from "../assets/uber1.jpg";
import Uber2 from "../assets/uber2.jpg";

const renderImages = (imageData) => {
	return imageData.map((img) => {
		return (
			<Row className="project-module">
				<Col
					lg={{
						span: img.isMultiImage ? 6 : 12,
						order: img.isMultiImage && img.left ? 2 : 1,
					}}
					className={`d-flex project-module ${
						img.isMultiImage ? "small-image" : "full-width-image"
					}`}
				>
					<img src={img.url} className="project-module">
						{}
					</img>
				</Col>
				{img.isMultiImage ? (
					<Col
						lg={{
							span: img.isMultiImage ? 3 : 12,
							order: img.isMultiImage && img.left ? 1 : 2,
						}}
						className="project-module feature-text"
					>
						<span className="green-dash"></span>
						{img.text}
					</Col>
				) : (
					""
				)}
			</Row>
		);
	});
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
					left: true,
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
					left: false,
					text: "A feature known as the Commons—a striking network of circulation and gathering spaces—will bring the life of the building into contact with the life of the streets, and allow views of the living city to serve as a continual inspiration for the creative work taking place inside.",
				},
				{
					url: Uber,
					isMultiImage: false,
					text: "Taking advantage of San Francisco’s temperate climate, the sustainability features of the Uber buildings center on their innovative “breathing” façades—a computer-controlled system of operable windows that greatly reduce the need for mechanical ventilation. The full-building-height indoor/outdoor spaces of the Commons serves as a buffer zone between the unconditioned exterior and the conditioned interior office environment. That feature is an integral part of a whole-building environmental strategy that also includes on-site water collection and solar harvesting, with green space both on the roof and in the public park at ground level. The building is expected to meet LEED Gold requirements when complete.",
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

					<Col xs={12} lg={8} className="project-text-body">
						<p className="text">
							The <strong>Uber Headquarters </strong>is designed
							to encourage vibrant life on the streets of its
							emerging San Francisco neighborhood.
						</p>
					</Col>
				</Row>
				{renderImages(projectData.data.images)}
				<Col xs={12} className="project-module project-text-large">
					<p className="text">{projectData.data.subTexts[0]}</p>
				</Col>
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
