import { prepareProps } from "utils/tools/prepareProps";

export const H1: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <h1 {...prepareProps(rest)}>{children}</h1>;
};
