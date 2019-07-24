import React from "react";

import { CityLogo } from "../utils/Icons";

export default function Footer() {
	return (
		<footer className="bck_blue">
			<div className="footer_logo">
				<CityLogo link linkTo="/" width="70px" height="70px" />
			</div>
			<div className="footer_discl">
				Manchester City 2018. All rights reserved
			</div>
		</footer>
	);
}
