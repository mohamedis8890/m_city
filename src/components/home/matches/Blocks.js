import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../utils/misc";
import Slide from "react-reveal/Slide";
import MatchesBlock from "../../utils/matches_block";

export default class Blocks extends Component {
	state = { matches: [] };

	componentDidMount() {
		firebaseMatches
			.limitToLast(6)
			.once("value")
			.then(snapshot =>
				this.setState({
					matches: firebaseLooper(snapshot).reverse()
				})
			)
			.catch(error => console.error(error));
	}

	showMatches = matches =>
		matches ? (
			this.state.matches.map(match => (
				<Slide bottom key={match.id}>
					<div className="item">
						<div className="wrapper">
							<MatchesBlock match={match} />
						</div>
					</div>
				</Slide>
			))
		) : (
			<div>No Matches to show</div>
		);

	render() {
		return (
			<div className="home_matches">{this.showMatches(this.state.matches)}</div>
		);
	}
}
