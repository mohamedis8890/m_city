import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import FormField from "../../utils/formFields";
import { validate } from "../../utils/misc";
import { firebasePromotions } from "../../../firebase";

export default class Enroll extends Component {
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
		let formSuccess = success ? "Congratulations!" : "Already on the database";

		this.setState({ formError: false, formData, formSuccess });

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
			firebasePromotions
				.orderByChild("email")
				.equalTo(dataToSubmit.email)
				.once("value")
				.then(snapshot => {
					if (snapshot.val()) {
						this.resetForm(false);
					} else {
						firebasePromotions.push(dataToSubmit);
						this.resetForm(true);
					}
				});
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
		this.setState({ formData, formError: false });
	};

	render() {
		return (
			<Fade>
				<div className="enroll_wrapper">
					<form onSubmit={event => this.submitForm(event)}>
						<div className="enroll_title">Enter your email</div>
						<div className="enroll_input">
							<FormField
								id={"email"}
								formData={this.state.formData.email}
								change={this.updateForm}
							/>
						</div>
						{this.state.formError && (
							<div className="error_label">Something went wrong</div>
						)}
						<div className="success_label">{this.state.formSuccess}</div>
						<button type="submit">Enroll</button>
						<div className="enroll_discl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							magnam aliquid consectetur odit unde esse adipisci, consequatur
							provident quod.
						</div>
					</form>
				</div>
			</Fade>
		);
	}
}
