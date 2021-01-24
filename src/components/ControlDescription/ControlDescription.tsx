import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { ToggleControl, RadioControl } from "@wordpress/components";

import styles from "./ControlDescription.styl";
import { className } from "@/utils";

export const ControlDescription: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { description_enabled, description_html } = attributes;

	return (
		<div className={styles.container}>
			<div className={styles.checkbox}>
				<label className={styles.checkbox_label}>
					{__("Site Description")}
				</label>

				<ToggleControl
					label={
						description_enabled ? __("Active") : __("Not active")
					}
					checked={description_enabled}
					onChange={(
						description_enabled: Attributes["description_enabled"]
					) => setAttributes({ description_enabled })}
				/>
			</div>

			<RadioControl
				label={__("Description HTML tag")}
				className={className([
					styles.radio,
					description_enabled ? null : styles["no-is_active"],
				])}
				selected={description_html}
				onChange={(description_html: Attributes["description_html"]) =>
					setAttributes({ description_html })
				}
				options={[
					{
						value: "h2",
						label: __("h2"),
					},
					{
						value: "h3",
						label: __("h3"),
					},
					{
						value: "h4",
						label: __("h4"),
					},
					{
						value: "span",
						label: __("span"),
					},
				]}
			/>
		</div>
	);
};
