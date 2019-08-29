import { Div } from "utils/Components";

interface ContainerProps extends EditProps {
	children: React.ReactNode;
}

const { Fragment } = wp.element;

export const EditContainer: React.ComponentType<ContainerProps> = props => {
	const { children, className, attributes } = props;
	const { description_enabled } = attributes;

	if (description_enabled) {
		return <Div className={className}>{children}</Div>;
	}

	return <Fragment>{children}</Fragment>;
};
