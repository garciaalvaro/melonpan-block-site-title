import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

const { __ } = wp.i18n;
const { BaseControl, ToggleControl, RadioControl } = wp.components;

export const ControlDescription: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { description_enabled, description_html } = attributes;

	return (
		<Div className="control-container">
			<BaseControl
				id={addPrefix("control-description_enabled")}
				className={addPrefix("control")}
				label={__("Site Description")}
			>
				<ToggleControl
					className={addPrefix("control-toggle")}
					label={description_enabled ? __("Active") : __("Not active")}
					checked={description_enabled}
					onChange={(description_enabled: Attributes["description_enabled"]) =>
						setAttributes({
							description_enabled
						})
					}
				/>
			</BaseControl>
			<RadioControl
				label={__("Description HTML tag")}
				className={addPrefix([
					"control-radio",
					description_enabled ? "is_active" : "no-is_active"
				])}
				selected={description_html}
				onChange={description_html => setAttributes({ description_html })}
				options={[
					{
						value: "h2",
						label: __("h2")
					},
					{
						value: "h3",
						label: __("h3")
					},
					{
						value: "h4",
						label: __("h4")
					},
					{
						value: "span",
						label: __("span")
					}
				]}
			/>
		</Div>
	);
};
