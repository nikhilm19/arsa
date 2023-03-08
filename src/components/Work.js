import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Uber1 from "../assets/uber.jpg";
import Uber2 from "../assets/uber1.jpg";
import Uber3 from "../assets/uber2.jpg";
import React from "react";
class Work extends React.Component {
	constructor(props) {
		super(props);
	}

	renderImages = () => {
		const workImagesData = [
			{
				url: Uber1,
				text: "DEK Residence",
				isHero : false
			},
			{
				url: Uber2,
				text: "Boutique Residence",
				isHero : true
			},
			{
				url: Uber3,
				text: "SPR Residence",
				isHero : true
			},
			{
				url: Uber1,
				text: "Hojiwala Office",
				isHero : false
			},
		];

		return workImagesData.map((img) => {
			return (
				<Col className="work-project d-flex" lg={6}>
					<div class="overlay">
						<div class="text">{img.text}</div>
					</div>
					<img src={img.url} alt="Avatar" class="project-img" />
					
				</Col>
			);
		});
	};

	render() {
		return (
			<Container>
				<Row>
					{this.renderImages()}
				</Row>
			</Container>
		);
	}
}

export default Work;
