interface InputProps {
	name: string;
	value: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const { name, value, label, placeholder, required, handleChange } = props;

	return (
		<div className='flex flex-col'>
			{label && (
				<label className='font-bold mt-4' htmlFor={name}>
					{label}
				</label>
			)}
			<input
				className='border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-teal-400 focus:outline-2 focus:ring-0 placeholder:text-gray-500'
				placeholder={placeholder}
				name={name}
				value={value}
				required={required}
				onChange={handleChange}
			></input>
		</div>
	);
}
