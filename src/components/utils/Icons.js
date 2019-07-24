import React from "react";
import { Link } from "react-router-dom";

import mcityLogo from "../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = props => {
	const { link, linkTo, width, height } = props;
	const template = (
		<div
			className="img_cover"
			style={{ width, height, background: `url(${mcityLogo}) no-repeat` }}
		/>
	);
	if (link) {
		return (
			<Link to={linkTo} className="link_logo">
				{template}
			</Link>
		);
	} else {
		return template;
	}
};
