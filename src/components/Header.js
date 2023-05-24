import React from "react";
import mainLogo from "../LOGO.png";
import bwLogo from "../r-front-01.png";
import { faBars, faAdjust } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import xMark from "../xmark-solid.svg";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			isNavOpen: false,
		};
	}

	renderLogo = () => {
		return !this.state.isNavOpen ? (
			<FontAwesomeIcon icon="fa-solid fa-bars" />
		) : (
			<img src={xMark} alt="Your SVG" />
		);
	};
	renderMenuItems = () => {
		return [
			{ name: "Work" },
			{ name: "Blog" },
			{ name: "About Us" },
			{ name: "Contact" },
		].map((item) => {
			return (
				<Nav.Item>
					<Nav.Link href={item.name}>{item.name}</Nav.Link>
				</Nav.Item>
			);
		});
	};

	renderNavBtn = () => {
		return !this.state.isNavOpen ? (
			<FontAwesomeIcon icon="fa-solid fa-bars" />
		) : (
			<img src={xMark} alt="Your SVG" />
		);
	};

	handleNavBtnClick = () => {
		this.setState({ isNavOpen: !this.state.isNavOpen });
	};

	render() {
		return (
			<header className="App-header">
				<Container>
					<Row>
						<Col xs={9} lg={4}>
							<div className="arsa-logo">
								<img
									src={
										!this.state.isNavOpen
											? mainLogo
											: bwLogo
									}
									className="arsa-logo"
									alt="logo"
								/>
							</div>
						</Col>
						<Col
							xs={3}
							className="d-lg-none justify-content-center d-flex align-items-center"
						>
							<button
								className={`nav-btn ${
									this.state.isNavOpen ? "nav-open" : ""
								}`}
								onClick={this.handleNavBtnClick}
							>
								{this.renderNavBtn()}
							</button>
						</Col>
						<Col>
							<nav
								className={`main-nav ${
									this.state.isNavOpen ? "nav-open" : ""
								}`}
							>
								<ul className="nav-menu-list">
									<Nav className="width-100 justify-content-end flex-column flex-sm-row">
										{this.renderMenuItems()}
									</Nav>
								</ul>
							</nav>
						</Col>
					</Row>
				</Container>
			</header>
		);
	}
}

export default Header;
