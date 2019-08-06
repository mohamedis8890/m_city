import { Redirect, Route } from "react-router-dom";

import React from "react";

export default function PrivateRoute({ user, component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			component={props =>
				user ? <Component {...props} user={user} /> : <Redirect to="/sign_in" />
			}
		/>
	);
}
