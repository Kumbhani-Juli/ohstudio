import React from "react";
import hand from "../assets/images/hands.jfif";
import img1 from "../assets/images/profileimage1.avif";
import img2 from "../assets/images/profileimage2.avif";
import icon1 from "../assets/images/icon1.avif";
import icon2 from "../assets/images/icon2.avif";
import icon3 from "../assets/images/icon3.avif";
import icon4 from "../assets/images/icon4.avif";
import icon5 from "../assets/images/icon5.avif";
import icon6 from "../assets/images/icon6.avif";
import icon7 from "../assets/images/icon7.avif";
import icon8 from "../assets/images/icon8.avif";
import icon9 from "../assets/images/icon10.avif";
import icon10 from "../assets/images/icon11.avif";
import icon11 from "../assets/images/icon12.avif";
import icon12 from "../assets/images/icon13.avif";
import icon13 from "../assets/images/icon14.avif";
import icon14 from "../assets/images/icon15.avif";
import icon15 from "../assets/images/icon16.avif";
import FadeComponent from "./Fadeanimation";
import "../assets/style/profile.css";
const Profile = () => {
	return (
		<div>
			<FadeComponent duration={1000} delay={900} direction={"up"}>
				<div className="profile">
					<h1>
						Hey
						<img src={hand} />
						I'm Oli
					</h1>
					<div className="profile-content">
						<img src={img1} />
						<img src={img2} />
					</div>
					<div className="about">
						<button>About</button>
						<h1>
							A freelance designer based in the UK. I combine my experience in
							product and brand to solve problems, tell stories, and create
							compelling experiences.
						</h1>
					</div>
					<div className="experience">
						<button>Experience</button>
						<h1>Where I've worked.</h1>
					</div>
					<div className="position">
						<div className="position-content">
							<p>2023 - Present</p>
							<h4>NativeState</h4>
							<p>Design Director</p>
							<button>Co-Founder</button>
						</div>
						<div className="position-content">
							<p>2021 - Present</p>
							<h4>Friendly Studio</h4>
							<p>Lead Product Designer</p>
							<button>Freelance</button>
						</div>
						<div className="position-content">
							<p>2022</p>
							<h4>R/GA</h4>
							<p>Senior Visual Designer</p>
							<button>Freelance</button>
						</div>
						<div className="position-content">
							<p>2021</p>
							<h4>R/GA</h4>
							<p>Senior Visual Designer</p>
							<button>Freelance</button>
						</div>
						<div className="position-content">
							<p>2021</p>
							<h4>AKQA</h4>
							<p>Senior Designer</p>
							<button>Freelance</button>
						</div>
						<div className="position-content">
							<p>2020</p>
							<h4>AKQA</h4>
							<p>Senior Designer</p>
							<button>Freelance</button>
						</div>
						<div className="position-content">
							<p>2019</p>
							<h4>UI Centric</h4>
							<p>Senior Product Designer</p>
							<button>Freelance</button>
						</div>
						<div className="position-content">
							<p>2008</p>
							<h4>Next Level</h4>
							<p>Junior Digital Designer</p>
							<button>Permanent</button>
						</div>
						<div className="position-content">
							<p>2009</p>
							<h4>Next Level</h4>
							<p>Digital Designer</p>
							<button>Permanent</button>
						</div>
						<div className="position-content">
							<p>2012</p>
							<h4>Agency TK</h4>
							<p>Digital Designer</p>
							<button>Permanent</button>
						</div>
						<div className="position-content">
							<p>2017</p>
							<h4>Agency TK</h4>
							<p>Senior Digital Designer</p>
							<button>Permanent</button>
						</div>
						<div className="position-content">
							<p>2019</p>
							<h4>UI Centric</h4>
							<p>Senior Product Designer</p>
							<button>Freelance</button>
						</div>
					</div>
					<div className="clients">
						<button>clients</button>
						<h1>Who I've worked with</h1>
					</div>
					<div className="icons">
						<div className="icon">
							<img src={icon1} />
						</div>
						<div className="icon">
							<img src={icon2} />
						</div>
						<div className="icon">
							<img src={icon3} />
						</div>
						<div className="icon">
							<img src={icon4} />
						</div>
						<div className="icon">
							<img src={icon5} />
						</div>
						<div className="icon">
							<img src={icon6} />
						</div>
						<div className="icon">
							<img src={icon7} />
						</div>
						<div className="icon">
							<img src={icon8} />
						</div>
						<div className="icon">
							<img src={icon9} />
						</div>
						<div className="icon">
							<img src={icon10} />
						</div>
						<div className="icon">
							<img src={icon11} />
						</div>
						<div className="icon">
							<img src={icon12} />
						</div>
						<div className="icon">
							<img src={icon13} />
						</div>
						<div className="icon">
							<img src={icon1} />
						</div>
						<div className="icon">
							<img src={icon14} />
						</div>
						<div className="icon">
							<img src={icon15} />
						</div>
					</div>
				</div>
			</FadeComponent>
		</div>
	);
};

export default Profile;
