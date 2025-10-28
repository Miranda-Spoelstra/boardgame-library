import { useMemo } from 'react';
import { type VariantProps } from 'tailwind-variants';
import { TbLoader } from 'react-icons/tb';
import { solidButton, outlineButton, disabledButton } from './ButtonStyles';

// inspo: https://dev.to/teyim/create-reusable-button-components-with-reacttypescript-tailwind-and-tailwind-variants-2j7d

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

function Button(props: ButtonProps) {
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

	const { newIcon: icon, iconPlacement } = useMemo(() => {
		let newIcon = rightIcon || leftIcon;

		if (isLoading) {
			newIcon = <TbLoader className='animate-spin' size={25} />;
		}

		return {
			newIcon,
			iconPlacement: rightIcon ? 'ml-2' : 'mr-2',
		};
	}, [isLoading, leftIcon, rightIcon]);

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

	const renderedIcon = (
		<span
			className={`inline-flex shrink-0 self-center ${
				children && !isLoading && iconPlacement
			}`}
		>
			{icon}
		</span>
	);
	
	return (
		<button className={renderButtonVariant()} {...rest} disabled={disabled}>
			{icon && leftIcon ? renderedIcon : null}
			{isLoading && renderedIcon}
			{!isLoading && children}
			{icon && rightIcon ? renderedIcon : null}
		</button>
	);
}

export default Button;
