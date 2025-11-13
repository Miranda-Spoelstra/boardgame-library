import type { Boardgame } from '../../types/boardgame';
import { useState } from 'react';
import { useAddBoardgameMutation } from '../../store';
import Panel from '../../components/Panel';
import Button from '../../components/button/Button';
import { TbPlus } from 'react-icons/tb';

interface AddBoardgameFormProps {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddBoardgameForm(props: AddBoardgameFormProps) {
	const initialState: Boardgame = {
		id: '',
		name: '',
		publisher: '',
		playerCount: '',
		duration: '',
		mechanics: '',
		age: '',
	};
	const { setShowForm } = props;
	const [formData, setFormData] = useState(initialState);
	const [addBoardgame, results] = useAddBoardgameMutation();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addBoardgame(formData);
		setShowForm(false);
		setFormData(initialState);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const inputClasses =
		'border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-0';

	return (
		<Panel className='my-4'>
			<h1 className='text-xl border-b-2 border-teal-200'>Add a new boardgame</h1>
			<form onSubmit={handleSubmit} className='flex flex-col'>
				<label className='font-bold mt-4' htmlFor='name'>
					Name
				</label>
				<input
					className={inputClasses}
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
				></input>

				<label className='font-bold mt-4' htmlFor='publisher'>
					Publisher
				</label>
				<input
					className={inputClasses}
					id='publisher'
					name='publisher'
					value={formData.publisher}
					onChange={handleChange}
				></input>

				<label className='font-bold mt-4' htmlFor='playerCount'>
					Player Count
				</label>
				<input
					className={inputClasses}
					id='playerCount'
					name='playerCount'
					value={formData.playerCount}
					onChange={handleChange}
				></input>

				<label className='font-bold mt-4' htmlFor='duration'>
					Duration
				</label>
				<input
					className={inputClasses}
					id='duration'
					name='duration'
					value={formData.duration}
					onChange={handleChange}
				></input>

				{/* Todo: Create multiselect or add a new input for each mechanic */}
				<label className='font-bold mt-4' htmlFor='mechanics'>
					Mechanics
				</label>
				<input
					className={inputClasses}
					id='mechanics'
					name='mechanics'
					value={formData.mechanics}
					onChange={handleChange}
				></input>

				<label className='font-bold mt-4' htmlFor='age'>
					Recommended age
				</label>
				<input
					className={inputClasses}
					id='age'
					name='age'
					value={formData.age}
					onChange={handleChange}
				></input>

				<Button
					className='mt-4'
					buttonStyle={{ color: 'primary', rounded: 'sm', size: 'sm' }}
					leftIcon={<TbPlus />}
				>
					Add Boardgame
				</Button>
			</form>
		</Panel>
	);
}
