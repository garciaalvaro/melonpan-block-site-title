import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

const { __ } = wp.i18n;
const { RadioControl } = wp.components;

export const ControlTitle: React.ComponentType<BlockProps> = props => {
	const { attributes, setAttributes } = props;
	const { title_html } = attributes;

	return (
		<Div className="control-container">
			<RadioControl
				label={__("Title HTML tag")}
				className={addPrefix("control-radio")}
				selected={title_html}
				onChange={title_html => setAttributes({ title_html })}
				options={[
					{
						value: "h1",
						label: __("h1")
					},
					{
						value: "h1_a",
						label: __("h1 > a")
					},
					{
						value: "a",
						label: __("a")
					},
					{
						value: "a_h1",
						label: __("a > h1")
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
