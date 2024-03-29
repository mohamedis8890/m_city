import React from "react";

export default function MatchesBlock({ match }) {
	return (
		<div className="match_block">
			<div className="match_date">
				{match.final === "Yes" ? match.date : `Yet to start: ${match.date}`}
			</div>
			<div className="match_wrapper">
				<div className="match_top">
					<div className="left">
						<div
							className="icon"
							style={{
								background: `url(/images/team_icons/${match.localThmb}.png)`
							}}
						/>
						<div className="team_name">{match.local}</div>
					</div>
					<div className="right">{match.resultLocal}</div>
				</div>

				<div className="match_bottom">
					<div className="left">
						<div
							className="icon"
							style={{
								background: `url(/images/team_icons/${match.awayThmb}.png)`
							}}
						/>
						<div className="team_name">{match.away}</div>
					</div>
					<div className="right">{match.resultAway}</div>
				</div>
			</div>
		</div>
	);
}
