import { EditContainer } from "./EditContainer";
import { Controls } from "../Controls/Controls";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";

const { useState, useEffect } = wp.element;

export const Edit: React.ComponentType<EditProps> = props => {
	const { attributes } = props;
	const { description_enabled } = attributes;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		const fetchSiteInfo = async () => {
			const site_info = await wp.apiFetch<SiteInfo>({
				path: "/melonpan-block-site-title/v1/site-info"
			});

			if (!site_info) {
				return;
			}

			setTitle(site_info.title);
			setDescription(site_info.description);
		};

		fetchSiteInfo();
	}, []);

	return (
		<EditContainer {...props}>
			<Title {...props} title={title} />
			{description_enabled && (
				<Description {...props} description={description} />
			)}
			<Controls {...props} />
		</EditContainer>
	);
};
