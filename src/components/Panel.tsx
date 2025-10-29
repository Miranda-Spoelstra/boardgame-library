interface PanelProps {
	children?: React.ReactNode;
	className?: string;
}

export default function Panel(props: PanelProps) {
	const { children, className, ...rest } = props;

	return (
		<div
			className={`border rounded p-3 shadow bg-white ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
