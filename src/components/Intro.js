import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProjects } from "../api";

const Intro = () => {
	const [projects, setProjects] = React.useState([]);
	useEffect(() => {
		getProjects().then((res) => {
			setProjects(res);
		});
	}, []);

	return (
		<>
			{
				<Container>
					<div className="intro">
						<p className="intro para-one">
							<span className="para-one highlight">
								Our work is in the dreams.
							</span>{" "}
							Cofounded by architects @aeshhhaaa and @rikensha6,
							#officearsa is a practice that strongly believes in
							designing contextually relevant spaces.
						</p>
						<div className="featured-projects">
							{projects.length > 0 ? (
								<ul className="">
									{projects.map((project) => {
										return (
											<li
												className={
													project?.details?.name
												}
											>
												<Link
													to={`/projects/${project?.details?.name}`}
												>
													{project?.details?.name}
												</Link>
											</li>
										);
									})}
								</ul>
							) : null}
						</div>
					</div>
				</Container>
			}
		</>
	);
};

export default Intro;
