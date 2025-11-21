import type { Boardgame } from '../types/boardgame';
import { useState, type SyntheticEvent } from 'react';
import { FaPlus, FaTimes, FaSave } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import { useAddBoardgameMutation, useEditBoardgameMutation } from '../store';
import Panel from './Panel';
import Button from './button/Button';
import Input from './formElements/Input';
import Select from './formElements/Select';

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

	// Temp options list. Adapt when multiselect is implemented
	const mechanicsOptions = [
		{ label: 'Hexagon Grid', value: 'Hexagon Grid' },
		{ label: 'Dice Rolling', value: 'Dice Rolling' },
		{
			label:
				'Hand Management, Hexagon Grid, End Game Bonuses, Race, Set Collection',
			value:
				'Hand Management, Hexagon Grid, End Game Bonuses, Race, Set Collection',
		},
		{
			label: 'Hand Management, Ladder Climbing, Score-and-Reset Game',
			value: 'Hand Management, Ladder Climbing, Score-and-Reset Game',
		},
		{
			label: 'Dice Rolling, Hexagon Grid, Hidden Victory Points',
			value: 'Dice Rolling, Hexagon Grid, Hidden Victory Points',
		},
		{
			label: 'Communication Limits, Cooperative Game',
			value: 'Communication Limits, Cooperative Game',
		},
	];

	// If the data to edit is different, show new edit data
	if (editData && editData.id !== formData.id) {
		setFormData(editData);
		setIsEdit(true);
	}

	const resetForm = (keepOpen?: boolean) => {
		keepOpen ? setIsEdit(false) : setShowForm(false);
		setFormData(initialData);
		setEditData(undefined);
	};

	const handleSubmit = (
		event: SyntheticEvent<HTMLFormElement, SubmitEvent>
	) => {
		event.preventDefault();
		isEdit ? editBoardgame(formData) : addBoardgame(formData);
		resetForm(event.nativeEvent.submitter?.id === 'another');
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<Panel
			header={isEdit ? 'Edit boardgame' : 'Add a new boardgame'}
			headerButtons={[
				{
					buttonStyle: { color: 'warning', rounded: 'sm', size: 'xs' },
					icon: <FaArrowsRotate />,
					onClick: () => resetForm(true),
				},
				{
					buttonStyle: { color: 'danger', rounded: 'sm', size: 'xs' },
					icon: <FaTimes />,
					onClick: () => resetForm(),
				},
			]}
			className='my-4'
		>
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
					<Select
						name='mechanics'
						value={formData.mechanics}
						label='Mechanics'
						placeholder='Choose mechanics'
						options={mechanicsOptions}
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

				<div className='flex justify-end gap-2 mt-4'>
					<Button
						id='submit'
						buttonStyle={{ color: 'primary', rounded: 'sm', size: 'sm' }}
						leftIcon={<FaSave />}
					>
						{isEdit ? 'Update' : 'Save'}
					</Button>
					<Button
						id='another'
						buttonStyle={{ color: 'secondary', rounded: 'sm', size: 'sm' }}
						leftIcon={<FaPlus />}
					>
						{isEdit ? 'Update' : 'Save'} & New
					</Button>
				</div>
			</form>
		</Panel>
	);
}
