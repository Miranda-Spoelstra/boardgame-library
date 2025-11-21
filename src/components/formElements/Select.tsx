interface SelectProps {
	name: string;
	value: string;
	label?: string;
	placeholder?: string;
	options: {
		label: string;
		value: string;
	}[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: SelectProps) {
	const { name, label, value, placeholder, options, onChange } = props;

	const placeholderClass = value.length > 0 ? '' : 'text-gray-500';

	let renderedOptions = options?.map((option) => (
		<option key={option.value} value={option.value}>
			{option.label}
		</option>
	));

	return (
		<div className='flex flex-col'>
			{label && (
				<label className='font-bold mt-4' htmlFor={name}>
					{label}
				</label>
			)}
			<select
				className={`border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-teal-400 focus:outline-2 focus:ring-0 ${placeholderClass}`}
				name={name}
				value={value}
				onChange={onChange}
			>
				{placeholder && (
					<option value='' disabled selected hidden>
						{placeholder}
					</option>
				)}
				{renderedOptions}
			</select>
		</div>
	);
}
