import React, { useState } from "react";
import "../assets/style/Header.css";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header-container">
			<button className="menu-toggle" onClick={toggleMenu}>
				&#9776; {/* This is the hamburger menu icon */}
			</button>
			<ul className={`header-list ${isMenuOpen ? "show" : ""}`}>
				<li>
					<a href="/ohstudio">Home</a>
				</li>
				<li>
					<a href="/ohstudio/profile">Profile</a>
				</li>
				<li>
					<a href="/ohstudio/contact">Contact</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
