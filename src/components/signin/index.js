import React, { Component } from "react";

import { firebase } from "../../firebase";
import FormField from "../utils/formFields";
import { validate } from "../utils/misc";

export default class SignIn extends Component {
	state = {
		formError: false,
		formSuccess: "",
		formData: {
			email: {
				element: "input",
				value: "",
				config: {
					name: "email_input",
					type: "email",
					placeholder: "Enter your email"
				},
				validation: {
					required: true,
					email: true
				},
				valid: false,
				validationMessage: ""
			},
			password: {
				element: "input",
				value: "",
				config: {
					name: "password_input",
					type: "password",
					placeholder: "Enter your password"
				},
				validation: {
					required: true
				},
				valid: false,
				validationMessage: ""
			}
		}
	};

	resetForm = success => {
		const formData = { ...this.state.formData };
		for (let key in this.state.formData) {
			formData[key].value = "";
			formData[key].valid = false;
			formData[key].validationMessage = "";
		}
		let formSuccess = success ? "" : "";

		this.setState({
			formError: false,
			formData,
			formSuccess
		});

		setTimeout(() => {
			this.setState({ formSuccess: "" });
		}, 2000);
	};

	submitForm = event => {
		event.preventDefault();

		let dataToSubmit = {};
		let formIsValid = true;

		for (let key in this.state.formData) {
			dataToSubmit[key] = this.state.formData[key].value;
			formIsValid = this.state.formData[key].valid && formIsValid;
		}

		if (formIsValid) {
			firebase
				.auth()
				.signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
				.then(() => this.props.history.push("/dashboard"))
				.catch(err => this.setState({ formError: true }));
		} else {
			this.setState({ formError: true });
		}
	};

	updateForm = element => {
		const formData = { ...this.state.formData };
		let data = formData[element.id];
		data.value = element.event.target.value;

		let validationResult = validate(data);
		data.valid = validationResult.valid;
		data.validationMessage = validationResult.message;

		formData[element.id] = data;
		this.setState({
			formData,
			formError: false
		});
	};

	render() {
		const { email, password, formError } = this.state.formData;
		return (
			<div className="container">
				<div className="signin_wrapper" style={{ margin: "100px" }}>
					<form onSubmit={event => this.submitForm(event)}>
						<h2>Please login</h2>
						<FormField id="email" formData={email} change={this.updateForm} />
						<FormField
							id="password"
							formData={password}
							change={this.updateForm}
						/>
						{formError && (
							<div className="error_label">Something went wrong</div>
						)}
						<button type="submit">Log in</button>
					</form>
				</div>
			</div>
		);
	}
}
