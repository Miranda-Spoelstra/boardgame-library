interface PanelProps {
	children?: React.ReactNode;
	className?: string;
}

export default function Panel(props: PanelProps) {
	const { children, className, ...rest } = props;

	return (
		<div className={`bg-white rounded p-4 shadow ${className}`} {...rest}>
			{children}
		</div>
	);
}
