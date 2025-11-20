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
			primary: 'border-teal-500 bg-teal-500 text-white hover:bg-teal-400',
			secondary: 'border-teal-300 bg-teal-300 text-white hover:bg-teal-200',
			success: 'border-teal-800 bg-teal-800 text-white hover:bg-teal-700',
			warning: 'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-400',
			danger: 'border-red-500 bg-red-500 text-white hover:bg-red-400',
		},
	},
});

export const outlineButton = tv({
	extend: baseButton,
	base: 'ring-1',
	variants: {
		color: {
			primary: 'border-teal-500 bg-white text-teal-500 hover:bg-gray-100',
			secondary: 'border-teal-300 bg-white text-teal-300 hover:bg-gray-100',
			success: 'border-teal-800 bg-white text-teal-800 hover:bg-gray-100',
			warning: 'border-yellow-500 bg-white text-yellow-500 hover:bg-gray-100',
			danger: 'border-red-500 bg-white text-red-500 hover:bg-gray-100',
		},
	},
});

export const disabledButton = tv({
	extend: baseButton,
	base: 'bg-gray-400 border-gray-400 text-gray-600 cursor-not-allowed',
});
