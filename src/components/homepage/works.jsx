import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Keseharian"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./mtsalkhairat.png"
								alt="mtsalkhairat"
								className="work-image"
							/>
							<div className="work-title">Sekolah</div>
							<div className="work-subtitle">
								Mts Al-khairat Kota Gorontalo
							</div>
							<div className="work-duration">2023 - 2026</div>
						</div>

						<div className="work">
							<img
								src="./github.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Develop</div>
							<div className="work-subtitle">
								Web Developer - Urwah 
							</div>
							<div className="work-duration">2025 - present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
