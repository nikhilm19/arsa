import React from "react";
import mainLogo from "../LOGO.png";
import bwLogo from "../r-front-01.png"
import { faBars, faAdjust } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import xMark from "../xmark-solid.svg"

export class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			isNavOpen: false,
		};
	}

	renderLogo = ()=>{
		return !this.state.isNavOpen ? <FontAwesomeIcon icon="fa-solid fa-bars"/> : <img src={xMark} alt="Your SVG" />
	}
	renderMenuItems = ()=>{
		return [{name:"Work"},{name:"About"},{name:"Work"},{name:"Contact Us"}].map((item)=>{

			return <li>{item.name}</li>
		})
	}

	renderNavBtn = ()=>{

		return !this.state.isNavOpen ? <FontAwesomeIcon icon="fa-solid fa-bars"/> : <img src={xMark} alt="Your SVG" />
	}

	handleNavBtnClick = () => {
		this.setState({ isNavOpen: !this.state.isNavOpen });
		console.log("heyyy");
	};

	render() {
		return (
			<header className="App-header">
				<div className="arsa-logo container">
					<img src={!this.state.isNavOpen?mainLogo:bwLogo} className="arsa-logo" alt="logo" />
				</div>
				<button
					className={`nav-btn ${
						this.state.isNavOpen ? "nav-open" : ""
					}`}
					onClick={this.handleNavBtnClick}
				>
					{this.renderNavBtn()}
				</button>
				<nav
					className={`main-nav ${
						this.state.isNavOpen ? "nav-open" : ""
					}`}
				>
					<ul className="nav-menu-list">
						<div className="container">
							{this.renderMenuItems()}
						</div>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
