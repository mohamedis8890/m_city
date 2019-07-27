import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export default class Stripes extends Component {
	state = {
		stripes: [
			{
				background: "#98c5e9",
				left: 120,
				top: -260,
				rotate: 25,
				delay: 0
			},
			{
				background: "#ffffff",
				left: 360,
				top: -397,
				rotate: 25,
				delay: 200
			},
			{
				background: "#98c5e9",
				left: 600,
				top: -498,
				rotate: 25,
				delay: 400
			}
		]
	};
	showStripes = () =>
		this.state.stripes.map((stripe, i) => (
			<Animate
				key={i}
				show={true}
				start={{
					background: "#ffffff",
					left: 0,
					rotate: 0,
					top: 0,
					opacity: 0
				}}
				enter={{
					background: `${stripe.background}`,
					left: [stripe.left],
					rotate: [stripe.rotate],
					top: [stripe.top],
					opacity: [1],
					timing: {
						delay: stripe.delay,
						duration: 200,
						ease: easePolyOut
					},
					events: {
						end() {
							console.log("animation finished");
						}
					}
				}}
			>
				{({ left, rotate, top, opacity, background }) => {
					return (
						<div
							className="stripe"
							style={{
								backgroundColor: background,
								opacity,
								transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
							}}
						/>
					);
				}}
			</Animate>
		));

	render() {
		return <div className="featured_stripes">{this.showStripes()}</div>;
	}
}
