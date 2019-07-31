import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import playerImage from "../../../Resources/images/players/Otamendi.png";
import PlayerCard from "../../utils/PlayerCard";

export default class HomeCards extends Component {
	state = {
		cardPositions: [
			{ bottom: 90, left: 300 },
			{ bottom: 60, left: 200 },
			{ bottom: 30, left: 100 },
			{ bottom: 0, left: 0 }
		]
	};

	// showAnimatedCards = () =>
	// 	this.state.show ? <div>Cards</div> : null;

	showAnimatedCards = () =>
		this.state.cardPositions.map((card, i) => (
			<Animate
				key={i}
				show={this.props.show}
				start={{
					left: 0,
					bottom: 0
				}}
				enter={{
					left: [card.left],
					bottom: [card.bottom],
					timing: { duration: 500, ease: easePolyOut }
				}}
			>
				{({ left, bottom }) => {
					return (
						<div
							style={{
								position: "absolute",
								left,
								bottom
							}}
						>
							<PlayerCard
								bck={playerImage}
								name="Nicolas"
								lastName="Otamendi"
								number="30"
							/>
						</div>
					);
				}}
			</Animate>
		));

	render() {
		return <div>{this.showAnimatedCards()}</div>;
	}
}
