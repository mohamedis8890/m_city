import React from "react";

export default function FormField({ id, formData, change }) {
	const renderTemplate = () => {
		let formTemplate;

		switch (formData.element) {
			case "input":
				formTemplate = (
					<div>
						<input
							id={id}
							{...formData.config}
							value={formData.value}
							onChange={event => change({ event, id })}
						/>
						<div className="error_label">
							{formData.validation && !formData.valid
								? formData.validationMessage
								: null}
						</div>
					</div>
				);
				break;

			default:
				formTemplate = null;
				break;
		}

		return formTemplate;
	};

	return <div>{renderTemplate()}</div>;
}
