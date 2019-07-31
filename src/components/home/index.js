import React from "react";

import Featured from "./featured";
import Matches from "./matches";
import MeetPlayers from "./meet-players";

export default function Home() {
	return (
		<div className="bck_blue">
			<Featured />
			<Matches />
			<MeetPlayers />
		</div>
	);
}
