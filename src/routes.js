import React from "react";
import { Switch } from "react-router-dom";

import Layout from "./HOC/Layout";
import Home from "./components/home";
import SignIn from "./components/signin";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/authRoutes/PrivateRoute";
import PublicRoute from "./components/authRoutes/PublicRoute";

function Routes(props) {
	console.log(props);
	return (
		<div className="App">
			<Layout>
				<Switch>
					<PrivateRoute
						exact
						{...props}
						path="/dashboard"
						component={Dashboard}
					/>
					<PublicRoute
						exact
						restricted
						path="/sign_in"
						{...props}
						component={SignIn}
					/>
					<PublicRoute exact path="/" {...props} component={Home} />
				</Switch>
			</Layout>
		</div>
	);
}

export default Routes;
