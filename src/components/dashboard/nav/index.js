import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { firebase } from "../../../firebase";

export default function AdminNav() {
	const links = [
		{
			title: "Matches",
			linkTo: "/admin-matches"
		},
		{
			title: "Edit Matches",
			linkTo: "/admin-matches/edit"
		},
		{
			title: "Players",
			linkTo: "/admin-players"
		},
		{
			title: "Edit Players",
			linkTo: "/admin-players/edit"
		}
	];

	const style = {
		color: "#ffffff",
		fontWeight: "300",
		borderBottom: "1px solid #353535"
	};

	const showLinks = () =>
		links.map(link => (
			<Link to={link.linkTo} key={link.title}>
				<ListItem button style={style}>
					{link.title}
				</ListItem>
			</Link>
		));

	const handleLogout = () => {
		firebase
			.auth()
			.signOut()
			.then(
				() => console.log("Logged out"),
				() => console.log("error logging out")
			);
	};

	return (
		<div>
			{showLinks()}
			<ListItem button style={style} onClick={handleLogout}>
				Log out
			</ListItem>
		</div>
	);
}
