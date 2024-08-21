import React from "react";
import FadeComponent from "./Fadeanimation";
const Contact = () => {
	return (
		<div>
			<FadeComponent duration={1000} delay={900} direction={"up"}>
				<div></div>
			</FadeComponent>
		</div>
	);
};

export default Contact;
