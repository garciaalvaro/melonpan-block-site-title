import React, { FunctionComponent } from "react";
import apiFetch from "@wordpress/api-fetch";
import { Fragment, useEffect, useState } from "@wordpress/element";

import { Controls } from "../Controls";
import { Title } from "../Title";
import { Description } from "../Description";

export const Edit: FunctionComponent<EditProps> = props => {
	const { description_enabled } = props.attributes;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const Container = description_enabled ? "div" : Fragment;

	const html_attributes = Object.keys(props)
		.filter(
			key =>
				["className", "style"].includes(key) ||
				key.search("data-") === 0
		)
		.reduce<Record<string, string>>(
			(acc, key) => ({ ...acc, [key]: props[key] as string }),
			{}
		);

	useEffect(() => {
		const fetchSiteInfo = async () => {
			const site_info = await apiFetch<SiteInfo>({
				path: "/melonpan-block-site-title/v1/site-info",
			});

			if (!site_info) return;

			setTitle(site_info.title);
			setDescription(site_info.description);
		};

		fetchSiteInfo();
	}, []);

	return (
		<Container {...html_attributes}>
			<Title {...props} html_attributes={html_attributes} title={title} />

			{description_enabled && (
				<Description
					description_html={props.attributes.description_html}
					description={description}
				/>
			)}

			<Controls {...props} />
		</Container>
	);
};
