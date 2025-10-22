import { useMemo } from 'react';
import { type VariantProps } from 'tailwind-variants';
import { TbLoader } from 'react-icons/tb';
import { solidButton, outlineButton } from './ButtonStyles';

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
		buttonStyle,
		buttonVariant = 'solid',
		disabled,
		isLoading,
		leftIcon,
		rightIcon,
		className,
		...rest
	} = props;

	console.log(buttonVariant, buttonStyle);

	const { newIcon: icon, iconPlacement } = useMemo(() => {
		let newIcon = rightIcon || leftIcon;

		if (isLoading) {
			newIcon = <TbLoader className='animate-spin' size={25} />;
		}

		return {
			newIcon,
			iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
		};
	}, [isLoading, leftIcon, rightIcon]);

	const renderButtonVariant = () => {
		if (buttonVariant === 'solid') {
			return solidButton({ ...buttonStyle, className });
		}
		if (buttonVariant === 'outline') {
			return outlineButton({ ...buttonStyle, className });
		}
	};

	// todo: fix disabled styling
	return (
		<button
			className={renderButtonVariant()}
			{...rest}
			disabled={disabled || isLoading}
		>
			{icon && iconPlacement === 'left' ? (
				<span
					className={`inline-flex shrink-0 self-center ${
						children && !isLoading && 'mr-2'
					}`}
				>
					{icon}
				</span>
			) : null}

			{!isLoading && children}

			{icon && iconPlacement === 'right' ? (
				<span
					className={`inline-flex shrink-0 self-center ${
						children && !isLoading && 'ml-2'
					}`}
				>
					{icon}
				</span>
			) : null}
		</button>
	);
}

export default Button;
