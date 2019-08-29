import { Span, H1, A } from "utils/Components";

interface Props extends EditProps, Pick<SiteInfo, "title"> {}

export const Title: React.ComponentType<Props> = props => {
	const { className, attributes, title } = props;
	const { description_enabled, title_html } = attributes;
	const classes = [description_enabled ? className : null, "title"];

	switch (title_html) {
		case "a":
			return (
				<A className={classes} href="#">
					{title}
				</A>
			);
			break;

		case "a_h1":
			return (
				<A className={classes} href="#">
					<H1>{title}</H1>
				</A>
			);
			break;

		case "h1":
			return <H1 className={classes}>{title}</H1>;
			break;

		case "h1_a":
			return (
				<H1 className={classes}>
					<A href="#">{title}</A>
				</H1>
			);
			break;

		default:
			return <Span className={classes}>{title}</Span>;
			break;
	}
};
