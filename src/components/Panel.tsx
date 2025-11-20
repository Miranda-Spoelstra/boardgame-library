import { type VariantProps } from 'tailwind-variants';
import Button from './button/Button';
import { solidButton, outlineButton } from './button/ButtonStyles';

interface PanelButton {
	buttonStyle: VariantProps<typeof solidButton | typeof outlineButton>;
	icon: React.ReactElement;
	onClick: () => void;
}

interface PanelProps {
	header?: string;
	headerButtons?: PanelButton[];
	children?: React.ReactNode;
	className?: string;
}

export default function Panel(props: PanelProps) {
	const { header, headerButtons, children, className, ...rest } = props;

	let buttons: React.ReactNode;
	if (headerButtons && headerButtons.length > 0) {
		buttons = headerButtons.map((button, index) => (
			<Button
				key={index}
				buttonStyle={button.buttonStyle}
				leftIcon={button.icon}
				onClick={() => button.onClick()}
			></Button>
		));
	}

	return (
		<div className={`bg-white rounded p-4 shadow ${className}`} {...rest}>
			{header && (
				<div className='flex justify-between border-b-2 border-teal-200 pb-2'>
					<p className='text-lg'>{header}</p>
					{headerButtons && <div className='flex flex-row gap-2'>{buttons}</div>}
				</div>
			)}
			{children}
		</div>
	);
}
