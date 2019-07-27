import React from "react";
import { Tag } from "../../utils/misc";
import Blocks from "./Blocks";

export default function Matches() {
	const headingTagStyle = {
		backgroundColor: "#0e1731",
		fontSize: "50px",
		color: "white"
	};

	const linkTagStyle = {
		backgroundColor: "#fff",
		fontSize: "20px",
		color: "#0e1731"
	};
	return (
		<div className="home_matches_wrapper">
			<div className="container">
				<Tag style={headingTagStyle}>Matches</Tag>
				<Blocks />
				<Tag style={linkTagStyle} link linkTo="/team">
					See more matches
				</Tag>
			</div>
		</div>
	);
}
