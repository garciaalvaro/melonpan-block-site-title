import React, { FunctionComponent } from "react";
import { InspectorControls } from "@wordpress/block-editor";

import { ControlTitle } from "../ControlTitle";
import { ControlDescription } from "../ControlDescription";

export const Controls: FunctionComponent<EditProps> = props => {
	return (
		<InspectorControls>
			<div>
				<ControlTitle {...props} />

				<ControlDescription {...props} />
			</div>
		</InspectorControls>
	);
};
