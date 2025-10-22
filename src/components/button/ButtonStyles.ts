import { tv } from 'tailwind-variants';

export const baseButton = tv({
	base: 'text-center relative font-semibold whitespace-nowrap align-middle outline-none inline-flex items-center justify-center select-none cursor-pointer',
	variants: {
		size: {
			xs: 'text-xs py-1 px-2',
			sm: 'text-sm py-2 px-4',
			md: 'text-md py-3 px-6',
			lg: 'text-lg py-4 px-8',
			xl: 'text-xl py-5 px-10',
		},
		vPadding: {
			xs: 'py-[4px]',
			sm: 'py-[8px]',
			md: 'py-[12px]',
			lg: 'py-[16px]',
		},
		vSpace: {
			xs: 'mx-1',
			sm: 'mx-2',
			md: 'mx-4',
			lg: 'mx-6',
		},
		// change to use flex for positioning?
		align: {
			center: 'mx-auto',
			right: 'ml-auto',
			left: 'mr-auto',
			top: 'mb-auto',
			bottom: 'mt-auto',
		},
		rounded: {
			none: 'rounded-none',
			xs: 'rounded-[2px]',
			sm: 'rounded-[4px]',
			md: 'rounded-[8px]',
			lg: 'rounded-[12px]',
			full: 'rounded-full',
		},
		behavior: {
			block: 'w-full',
		},
	},
});

export const solidButton = tv({
	extend: baseButton,
	variants: {
		color: {
			primary: 'border-blue-500 bg-blue-500 text-white',
			secondary: 'border-gray-900 bg-gray-900 text-white',
			success: 'border-green-500 bg-green-500 text-white',
			warning: 'border-yellow-400 bg-yellow-400 text-white',
			danger: 'border-red-500 bg-red-500 text-white',
		},
	},
});

export const outlineButton = tv({
	extend: baseButton,
	base: 'ring-1',
	variants: {
		color: {
			primary: 'border-blue-500 bg-white text-blue-500',
			secondary: 'border-gray-900 bg-white text-gray-900',
			success: 'border-green-500 bg-white text-green-500',
			warning: 'border-yellow-400 bg-white text-yellow-400',
			danger: 'border-red-500 bg-white text-red-500',
		},
	},
});
