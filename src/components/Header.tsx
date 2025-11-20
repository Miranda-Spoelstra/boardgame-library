import type { Boardgame } from '../types/boardgame';
import { VscSearch } from 'react-icons/vsc';
import Button from './button/Button';
import Input from './formElements/Input';

interface HeaderProps {
	term: string;
	setTerm: React.Dispatch<React.SetStateAction<string>>;
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	setEditData: React.Dispatch<React.SetStateAction<Boardgame | undefined>>;
}

export default function Header(props: HeaderProps) {
	const { term, setTerm, showForm, setShowForm, setEditData } = props;

	const handleClick = () => {
		setShowForm(!showForm);
		setEditData(undefined);
	};

	return (
		<div className='flex justify-between bg-teal-800 py-4 px-6'>
			<h1 className='text-2xl font-bold text-white'>Boardgame Library</h1>
			<div className='flex flex-row gap-4'>
				<form className='flex flex-row order border-teal-700 rounded-[4px] bg-white relative'>
					<div className='absolute inset-y-0 flex items-center pl-3'>
						<VscSearch className='h-4 w-4 text-gray-500' />
					</div>
					<Input
						value={term}
						name='search'
						placeholder='Search'
						onChange={(e) => setTerm(e.target.value)}
						className='pl-9'
					/>
				</form>
				<Button
					buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
					className='border border-teal-700'
					onClick={() => handleClick()}
				>
					{showForm ? 'Close Form' : 'Add Boardgame'}
				</Button>
			</div>
		</div>
	);
}
