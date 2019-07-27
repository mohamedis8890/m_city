import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ link, linkTo, style, children }) => {
	const template = (
		<div
			style={{
				fontFamily: "Righteous",
				padding: "5px 10px",
				display: "inline-block",
				...style
			}}
		>
			{children}
		</div>
	);
	return link ? <Link to={linkTo}>{template}</Link> : template;
};

export const firebaseLooper = snapshot => {
	const data = [];

	snapshot.forEach(snapshotChild => {
		data.push({
			...snapshotChild.val(),
			id: snapshotChild.key
		});
	});

	return data;
};
