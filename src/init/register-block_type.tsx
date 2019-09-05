import { registerBlockType } from "@wordpress/blocks";

import { Icon } from "utils/Components";
import {
	block_category,
	block_name,
	block_description,
	block_title
} from "utils/data/plugin";
import { Edit } from "Components/Edit/Edit";

type AttributesDefinition = Record<keyof Attributes, any>;

registerBlockType<AttributesDefinition>(block_name, {
	title: block_title,
	icon: () => <Icon icon="logo" />,
	category: block_category,
	description: block_description,
	supports: { align: true },
	edit: (props: EditProps) => <Edit {...props} />,
	save: () => null,
	attributes: {
		title_html: {
			type: "string",
			default: "h1_a"
		},
		description_enabled: {
			type: "boolean",
			default: false
		},
		description_html: {
			type: "string",
			default: "h2"
		}
	}
});
