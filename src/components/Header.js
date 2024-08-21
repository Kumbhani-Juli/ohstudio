import React from "react";
import "../assets/style/Header.css";

const Header = () => {
	return (
		<div>
			<div className="header-container">
				<ul className="header-list">
					<li>
						<a href="/ohstudio">Home</a>
					</li>
					<li>
						<a href="/profile">Profile</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
