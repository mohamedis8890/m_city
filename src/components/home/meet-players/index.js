import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";

import { Tag } from "../../utils/misc";

import stripesBck from "../../../Resources/images/stripes.png";
import HomeCards from "./homeCards";

export default class MeetPlayers extends Component {
	state = { show: false };
	render() {
		const textStyle = {
			backgroundColor: "#0e1731",
			fontSize: "100px",
			color: "#fff",
			display: "inline-block",
			marginBottom: "20px"
		};
		const linkStyle = {
			backgroundColor: "#fff",
			fontSize: "27px",
			color: "#0e1731",
			border: "1px solid #0e1731",
			display: "inline-block",
			marginBottom: "27px"
		};
		return (
			<Reveal
				fraction={0.7}
				onReveal={() => {
					this.setState({ show: true });
				}}
			>
				<div
					className="home_meetplayers"
					style={{ background: `#ffffff url(${stripesBck})` }}
				>
					<div className="container">
						<div className="home_meetplayers_wrapper">
							<div className="home_card_wrapper">
								<HomeCards show={this.state.show} />
							</div>
							<div className="home_text_wrapper">
								<div>
									<Tag style={textStyle}>Meet</Tag>
								</div>
								<div>
									<Tag style={textStyle}>The</Tag>
								</div>
								<div>
									<Tag style={textStyle}>Players</Tag>
								</div>
								<div>
									<Tag style={linkStyle} link linkTo="/team">
										Meet them here
									</Tag>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
		);
	}
}
