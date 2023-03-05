import React from "react";
import mainLogo from "../LOGO.png";

export class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
				<header className="App-header">
					<div className="arsa-logo container">
						<img src={mainLogo} className="arsa-logo" alt="logo" />
					</div>
					<nav className="main-nav">
						<ul className="nav-menu-list">
							<div className="container">
								<li>Work</li>

								<li>Studio</li>

								<li>News</li>

								<li>About Us</li>
							</div>
						</ul>
					</nav>
				</header>
			
		);
	}
}

export default Header;
