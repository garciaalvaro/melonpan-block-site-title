import { Div } from "utils/Components";
import { ControlTitle } from "../ControlTitle/ControlTitle";
import { ControlDescription } from "../ControlDescription/ControlDescription";

const { InspectorControls } = wp.blockEditor;

export const Controls: React.ComponentType<BlockProps> = props => {
	return (
		<InspectorControls>
			<Div id="controls">
				<ControlTitle {...props} />
				<ControlDescription {...props} />
			</Div>
		</InspectorControls>
	);
};
