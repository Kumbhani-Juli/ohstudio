import React from "react";
import "../assets/style/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/images/image1.avif";
import img2 from "../assets/images/image2.avif";
import img3 from "../assets/images/image3.avif";
import img4 from "../assets/images/image4.avif";
import img5 from "../assets/images/image5.avif";
import img6 from "../assets/images/image6.avif";
import img7 from "../assets/images/image7.avif";
import img8 from "../assets/images/image8.avif";
import img9 from "../assets/images/image9.avif";
import video1 from "../assets/images/video1.mp4";
import video2 from "../assets/images/video2.mp4";
import video3 from "../assets/images/video3.mp4";
import FadeComponent from "./Fadeanimation";
const Home = () => {
	return (
		<div>
			<FadeComponent duration={1000} delay={900} direction={"up"}>
				<div className="header-top">
					<h1>A brand and product designer working with clients globally</h1>
					<ul className="header-top-list">
						<li>
							<a href="#Expertise">Expertise</a>
						</li>
						<li>
							<a href="#Branding">Branding</a>
						</li>
						<li>
							<a href="#Product">Product</a>
						</li>
						<li>
							<a href="#Design System">Design System</a>
						</li>
					</ul>
				</div>
				<div className="header-center">
					<img src={img1} alt="Description of the image" />
					<img src={img2} alt="Description of the image" />
					<img src={img3} alt="Description of the image" />
					<img src={img4} alt="Description of the image" />
					<video autoplay muted controls>
						<source src={video1} type="video/mp4" />
					</video>
					<img src={img5} alt="Description of the image" />
					<img src={img6} alt="Description of the image" />
					<video autoplay muted controls>
						<source src={video2} type="video/mp4" />
					</video>
					<img src={img7} alt="Description of the image" />
					<img src={img8} alt="Description of the image" />
					<img src={img9} alt="Description of the image" />
					<video className="last-video" autoplay muted controls>
						<source src={video3} type="video/mp4" />
					</video>
				</div>
			</FadeComponent>
		</div>
	);
};

export default Home;
