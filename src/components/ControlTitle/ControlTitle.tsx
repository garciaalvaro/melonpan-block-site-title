import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import styles from "./ControlTitle.styl";

export const ControlTitle: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { title_html } = attributes;

	return (
		<RadioControl
			className={styles.container}
			label={__("Title HTML tag")}
			selected={title_html}
			onChange={(title_html: Attributes["title_html"]) =>
				setAttributes({
					title_html: title_html,
				})
			}
			options={[
				{
					value: "h1",
					label: __("h1"),
				},
				{
					value: "h1_a",
					label: __("h1 > a"),
				},
				{
					value: "a",
					label: __("a"),
				},
				{
					value: "a_h1",
					label: __("a > h1"),
				},
				{
					value: "span",
					label: __("span"),
				},
			]}
		/>
	);
};
