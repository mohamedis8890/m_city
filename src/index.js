import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./firebase";

import Routes from "./routes";

import "./Resources/css/app.css";

const App = props => (
	<BrowserRouter>
		<Routes {...props} />
	</BrowserRouter>
);

firebase.auth().onAuthStateChanged(user => {
	ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
