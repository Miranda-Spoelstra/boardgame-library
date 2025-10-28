import { type VariantProps } from 'tailwind-variants';
import { TbLoader } from 'react-icons/tb';
import { solidButton, outlineButton, disabledButton } from './ButtonStyles';

interface ButtonProps {
	children?: React.ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
	leftIcon?: React.ReactElement;
	rightIcon?: React.ReactElement;
	buttonStyle?: VariantProps<typeof solidButton | typeof outlineButton>;
	className?: string;
	buttonVariant?: 'solid' | 'outline';
}

export default function Button(props: ButtonProps) {
	const {
		children,
		buttonStyle = { color: 'primary', rounded: 'sm', size: 'sm' },
		buttonVariant = 'solid',
		disabled = false,
		isLoading = false,
		leftIcon,
		rightIcon,
		className,
		...rest
	} = props;

	const renderButtonVariant = () => {
		if (disabled) {
			return disabledButton({ ...buttonStyle, className });
		}
		if (buttonVariant === 'solid') {
			return solidButton({ ...buttonStyle, className });
		}
		if (buttonVariant === 'outline') {
			return outlineButton({ ...buttonStyle, className });
		}
	};

	// Only add iconMargin if there are children inside the button and it is not loading
	const iconMargin = rightIcon ? 'ml-2' : 'mr-2';
	const renderedIcon = (
		<span
			className={`inline-flex shrink-0 self-center ${
				children && !isLoading && iconMargin
			}`}
		>
			{isLoading ? (
				<TbLoader className='animate-spin' size={25} />
			) : (
				rightIcon || leftIcon
			)}
		</span>
	);

	return (
		<button className={renderButtonVariant()} {...rest}>
			{!isLoading && leftIcon ? renderedIcon : null}
			{isLoading ? renderedIcon : children}
			{!isLoading && rightIcon ? renderedIcon : null}
		</button>
	);
}
