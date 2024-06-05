import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzi-2JgtbU3EveSVlyQZKjpH8PEDf03mcoLw&s"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">RevelApps</div>
							<div className="work-subtitle">Internship</div>
							<div className="work-duration">
								July 2023 - September 2023
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
