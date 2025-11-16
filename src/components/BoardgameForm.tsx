import type { Boardgame } from '../types/boardgame';
import { useState } from 'react';
import { useAddBoardgameMutation, useEditBoardgameMutation } from '../store';
import Panel from './Panel';
import Button from './button/Button';
import { FaPencilAlt, FaPlus, FaTimes } from 'react-icons/fa';

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

	const [addBoardgame, addResults] = useAddBoardgameMutation();
	const [editBoardgame, editResults] = useEditBoardgameMutation();

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
		if (isEdit) {
			editBoardgame(formData);
		} else {
			addBoardgame(formData);
		}
		resetForm();
	};

	const handleClose = () => {
		resetForm();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const inputClasses =
		'border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-0';

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
					<div className='flex flex-col'>
						<label className='font-bold mt-4' htmlFor='name'>
							Name
						</label>
						<input
							className={inputClasses}
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
						></input>
					</div>
					<div className='flex flex-col'>
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
					</div>
					<div className='flex flex-col'>
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
					</div>
					<div className='flex flex-col'>
						<label className='font-bold mt-4' htmlFor='duration'>
							Average Duration
						</label>
						<input
							className={inputClasses}
							id='duration'
							name='duration'
							value={formData.duration}
							onChange={handleChange}
						></input>
					</div>
					<div className='flex flex-col'>
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
					</div>
					<div className='flex flex-col'>
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
					</div>
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
