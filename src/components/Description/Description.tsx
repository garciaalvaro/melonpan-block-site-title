import React, { FunctionComponent } from "react";

interface Props extends Pick<EditProps["attributes"], "description_html"> {
	description: string;
}

export const Description: FunctionComponent<Props> = props => {
	const { description, description_html } = props;

	switch (description_html) {
		case "h2":
			return <h2>{description}</h2>;

		case "h3":
			return <h3>{description}</h3>;

		case "h4":
			return <h4>{description}</h4>;

		default:
			return <span>{description}</span>;
	}
};
