import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/style/footer.css";
import FadeComponent from "./Fadeanimation";
const Footer = () => {
	return (
		<div>
			<FadeComponent duration={1000} delay={900} direction={"up"}>
				
				<div className="footer">
					<div className="star-container">
						<FontAwesomeIcon icon={faSnowflake} className="star-icon" />
						<h4>© Oli Harris 2023</h4>
					</div>
					<div className="footer-link">
						<a href="#Twitter">Twitter</a>
						<a href="#Linkedin">Linkedin</a>
						<a href="#mail">Mail</a>
					</div>
				</div>
			</FadeComponent>
		</div>
	);
};

export default Footer;
