import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Uber from "../assets/uber.jpg";
import Uber1 from "../assets/uber1.jpg";
import Uber2 from "../assets/uber2.jpg";
import { getProject } from "../api";
import LoadingSpinner from "./Spinner";

const renderImages = (imageData, projectData) => {
	return imageData.map((img,i) => {
		console.log(img?.isMultiImage, img?.left)
		return (
			<Row className="project-module">
				<Col
					lg={{
						span: img.isMultiImage ? 6 : 12,
						order: (img.isMultiImage && !img.left) ? 2 : 1,
					}}
					className={`d-flex project-module ${
						img?.isMultiImage ? "small-image" : "full-width-image"
					}`}
				>
					<img src={img.url} className="project-module">
						{}
					</img>
				</Col>
				{img?.isMultiImage ? (
					<Col
						lg={{
							span: img.isMultiImage ? 6 : 12,
							order:(img.isMultiImage && !img.left) ? 1 : 2,
						}}
						className="project-module feature-text"
					>
						{projectData[`feature${i}`]? <span className="green-dash"></span> : null}
						{i!=imageData.length ? projectData[`feature${i}`] : null}
					</Col>
				) : (
					""
				)}
			</Row>
		);
	});
};

const Project1 = () => {
	const { projectName } = useParams();
	const [images, setImages] = React.useState([]);
	const [projectData, setProjectData] = React.useState({});
	useEffect(() => {
		getProject(projectName).then((res) => {
			setProjectData(res);
			setImages(res?.imagesUrls);
			
		});
	}, []);
	return (
		<>
			{images?.length > 0 ? (
				<div className="project">
					<Container fluid>
						<Row className="project-text-large project-module">
							<Col xs={12} lg={12}>
								<span className="green-dash"></span>
							</Col>

							<Col xs={12} lg={8} className="project-text-body">
								<p className="text">{projectData?.header}</p>
							</Col>
						</Row>
						{renderImages(images, projectData)}
						<Col
							xs={12}
							className="project-module project-text-large"
						>
							<p className="text">{projectData?.feature1}</p>
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
												{projectData?.phase}
											</li>
										</Col>
										<Col xs={12} lg={9}>
											<li>
												<span>size</span>
												{projectData?.size}
											</li>
										</Col>
									</Row>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
			) : <LoadingSpinner/>}
		</>
	);
};
export default Project1;
