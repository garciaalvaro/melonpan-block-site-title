import { InspectorControls } from "@wordpress/block-editor";

import { Div } from "utils/Components";
import { ControlTitle } from "../ControlTitle/ControlTitle";
import { ControlDescription } from "../ControlDescription/ControlDescription";

export const Controls: React.ComponentType<EditProps> = props => {
	return (
		<InspectorControls>
			<Div id="controls">
				<ControlTitle {...props} />
				<ControlDescription {...props} />
			</Div>
		</InspectorControls>
	);
};
