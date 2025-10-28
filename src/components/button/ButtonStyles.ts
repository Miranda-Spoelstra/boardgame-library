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
			primary: 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600',
			secondary: 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800',
			success: 'border-green-500 bg-green-500 text-white hover:bg-green-600',
			warning: 'border-orange-400 bg-orange-400 text-white hover:bg-orange-500',
			danger: 'border-red-500 bg-red-500 text-white hover:bg-red-600',
		},
	},
});

export const outlineButton = tv({
	extend: baseButton,
	base: 'ring-1',
	variants: {
		color: {
			primary: 'border-blue-500 bg-white text-blue-500 hover:bg-blue-100',
			secondary: 'border-gray-900 bg-white text-gray-900 hover:bg-gray-100',
			success: 'border-green-500 bg-white text-green-500 hover:bg-green-50',
			warning: 'border-orange-400 bg-white text-orange-400 hover:bg-orange-50',
			danger: 'border-red-500 bg-white text-red-500 hover:bg-red-50',
		},
	},
});

export const disabledButton = tv({
	extend: baseButton,
	base: 'bg-gray-300 border-gray-500 text-gray-500 cursor-not-allowed',
});
