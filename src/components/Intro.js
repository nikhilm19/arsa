import { Link } from "react-router-dom";

const Intro = () => {
	const projects = [
		{ id: "1", name: "SPR Residence", url: "SPR-residence" },
		{ id: "2", name: "Boutique Residence", url: "Boutique-residency" },
		{ id: "3", name: "DEK Residence", url: "DEK" },
		{ id: "4", name: "Hojiwala Office", url: "Hojiwala-office" },
		{ id: "5", name: "Khatri's", url: "Khatri" },
		{ id: "6", name: "Sanskrit Library", url: "Sanskrit-library" },
	];

	return (
		<div className="intro container">
			<p className="intro para-one">
				<span className="para-one highlight">
					Our work is in the dreams.
				</span>{" "}
				Cofounded by architects @aeshhhaaa and @rikensha6, #officearsa
				is a practice that strongly believes in designing contextually
				relevant spaces.
			</p>
			<div className="featured-projects">
				<ul className="">
					{projects.map((project, id) => {
						return (
							<li className={project.id}>
								<Link to={`/projects/${project.url}`}>
									{project.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Intro;
