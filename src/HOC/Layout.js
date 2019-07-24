import React from "react";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";

export default function Layout(props) {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}
