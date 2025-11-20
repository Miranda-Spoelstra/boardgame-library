import type { Boardgame } from '../types/boardgame';
import { useState } from 'react';
import { FaPencilAlt, FaPlus, FaTimes } from 'react-icons/fa';
import { useAddBoardgameMutation, useEditBoardgameMutation } from '../store';
import Panel from './Panel';
import Button from './button/Button';
import Input from './Input';

interface BoardgameFormProps {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	editData?: Boardgame;
	setEditData: React.Dispatch<React.SetStateAction<Boardgame | undefined>>;
}

export default function BoardgameForm(props: BoardgameFormProps) {
	const initialData: Boardgame = {
		id: '',
		name: '',
		publisher: '',
		playerCount: '',
		duration: '',
		mechanics: '',
		age: '',
	};
	const { setShowForm, editData, setEditData } = props;
	const [formData, setFormData] = useState(initialData);
	const [isEdit, setIsEdit] = useState(false);

	const [addBoardgame] = useAddBoardgameMutation();
	const [editBoardgame] = useEditBoardgameMutation();

	// If the data to edit is different, show new edit data
	if (editData && editData.id !== formData.id) {
		setFormData(editData);
		setIsEdit(true);
	}

	const resetForm = () => {
		setShowForm(false);
		setFormData(initialData);
		setEditData(undefined);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		isEdit ? editBoardgame(formData) : addBoardgame(formData);
		resetForm();
	};

	const handleClose = () => {
		resetForm();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<Panel className='my-4'>
			<div className='flex flex-row border-b-2 border-teal-200 pb-2 justify-between'>
				<h1 className='text-xl'>
					{isEdit ? 'Edit boardgame' : 'Add a new boardgame'}
				</h1>
				<Button
					buttonStyle={{ color: 'danger', rounded: 'sm', size: 'xs' }}
					leftIcon={<FaTimes />}
					onClick={handleClose}
				/>
			</div>

			<form onSubmit={handleSubmit}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
					<Input
						name='name'
						value={formData.name}
						label='Name'
						placeholder='Enter name'
						required={true}
						onChange={(e) => handleChange(e)}
					/>
					<Input
						name='publisher'
						value={formData.publisher}
						label='Publisher'
						placeholder='Enter publisher'
						onChange={(e) => handleChange(e)}
					/>
					<Input
						name='playerCount'
						value={formData.playerCount}
						label='Player Count'
						placeholder='Enter player count'
						onChange={(e) => handleChange(e)}
					/>
					<Input
						name='duration'
						value={formData.duration}
						label='Average duration'
						placeholder='Enter average duration'
						onChange={(e) => handleChange(e)}
					/>
					<Input
						name='mechanics'
						value={formData.mechanics}
						label='Mechanics'
						placeholder='Enter mechanics'
						onChange={(e) => handleChange(e)}
					/>
					<Input
						name='age'
						value={formData.age}
						type='number'
						label='Recommended age'
						placeholder='Enter age'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='flex justify-end'>
					<Button
						className='mt-4'
						buttonStyle={{ color: 'primary', rounded: 'sm', size: 'sm' }}
						leftIcon={isEdit ? <FaPencilAlt /> : <FaPlus />}
					>
						{isEdit ? 'Update' : 'Add Boardgame'}
					</Button>
				</div>
			</form>
		</Panel>
	);
}
