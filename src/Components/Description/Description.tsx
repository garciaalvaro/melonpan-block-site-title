import { Span, H2, H3, H4 } from "utils/Components";

interface Props extends EditProps, Pick<SiteInfo, "description"> {}

export const Description: React.ComponentType<Props> = props => {
	const { attributes, description } = props;
	const { description_html } = attributes;

	switch (description_html) {
		case "h2":
			return <H2>{description}</H2>;
			break;

		case "h3":
			return <H3>{description}</H3>;
			break;

		case "h4":
			return <H4>{description}</H4>;
			break;

		default:
			return <Span>{description}</Span>;
			break;
	}
};
