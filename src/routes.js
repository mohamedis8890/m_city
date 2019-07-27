import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./HOC/Layout";
import Home from "./components/home";

function Routes() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Layout>
		</div>
	);
}

export default Routes;
