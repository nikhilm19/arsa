import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Uber1 from "../assets/uber.jpg";
import Uber2 from "../assets/uber1.jpg";
import Uber3 from "../assets/uber2.jpg";
import React, { useEffect } from "react";
import { getProjects } from "../api";
import LoadingSpinner from "./Spinner";

const Work = () => {
	const [projects, setProjects] = React.useState([]);

	useEffect(() => {
		getProjects().then((res) => {
			setProjects(res);
		});
	}, []);

	return (
		<>
			{projects.length > 0 ? (
				<Container>
					<Row className="justify-content-md-center">
						{projects.map((project) => {
							return (
								<Col
									className="work-project d-flex"
									lg={project.isHero ? 4 : 3}
								>
									<Link
										to={`/projects/${project?.details?.name}`}
									>
										<div class="overlay">
											<div class="text">
												{project?.details?.name}
											</div>
										</div>
										<img
											src={
												project?.details?.imagesUrls[0]
													?.url
											}
											alt="Avatar"
											class="project-img"
										/>
									</Link>
								</Col>
							);
						})}
					</Row>
				</Container>
			) : <LoadingSpinner/>}
		</>
	);
};
// class Work extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state={
// 			projects:[]
// 		};

// 	}

// 	componentDidMount =()=>{

// 		this.fetchProjects();
// 	}

// 	fetchProjects = async()=>{

// 		const res = await getProjects();
// 		console.log(res)
// 		this.setState({projects:res});
// 		console.log(this.state)

// 	}
// 	renderImages = async() => {

// 		if(this.state.projects.length>0){
// 		return this.state.projects.map((project) => {
// 			return (
// 				<Col className="work-project d-flex" lg={project.isHero?6:4} >
// 					<div class="overlay">
// 						<div class="text">{project?.details?.name}</div>
// 					</div>
// 					<img src={project?.details?.imagesUrls[0]?.url} alt="Avatar" class="project-img" />

// 				</Col>
// 			);
// 		});}
// 		return null;
// 	};

// 	render() {
// 		return (
// 			<Container>
// 				<Row>
// 					{this.renderImages()}
// 				</Row>
// 			</Container>
// 		);
// 	}
// }

export default Work;
