import { useState } from 'react';
import Panel from '../../components/Panel';
import { useAddBoardgameMutation } from '../../store';
import Button from '../../components/button/Button';

interface AddBoardgameFormProps {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddBoardgameForm(props: AddBoardgameFormProps) {
	const initialState = {
		name: '',
		publisher: '',
		playerCount: 0,
		duration: '',
		mechanics: [''],
		age: '',
	};
	const { setShowForm } = props;
	const [formData, setFormData] = useState(initialState);
	const [addBoardgame, results] = useAddBoardgameMutation();

	// todo: save all form data instead of just name
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addBoardgame(formData.name);
		setShowForm(false);
		setFormData(initialState);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const inputClasses =
		'border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2';

	return (
		<Panel className='my-4'>
			<h1 className='text-xl'>Add new boardgame</h1>
			<form onSubmit={handleSubmit}>
				<label className='font-bold mr-4' htmlFor='name'>
					Name
				</label>
				<input
					className={inputClasses}
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
				></input>
				<label className='font-bold mr-4' htmlFor='publisher'>
					Publisher
				</label>
				<input
					className={inputClasses}
					id='publisher'
					name='publisher'
					value={formData.publisher}
					onChange={handleChange}
				></input>
				<Button>Submit</Button>
			</form>
		</Panel>
	);
}
