import type { Boardgame } from '../../types/boardgame';
import { useEffect, useState } from 'react';
import { useFetchBoardgamesQuery } from '../../store';
import Button from '../../components/button/Button';
import BoardgamePanel from '../../components/BoardgamePanel';
import AddBoardgameForm from './AddBoardgameForm';
import { VscSearch } from 'react-icons/vsc';

export default function HomePage() {
	const [showForm, setShowForm] = useState(false);
	const [term, setTerm] = useState('');
	const { data, error, isFetching } = useFetchBoardgamesQuery();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const res = data?.filter((boardgame: Boardgame) =>
			boardgame.name.includes(term)
		);
		// Todo: finish implementing search
		console.log(res);
	};

	let content: React.ReactNode;
	if (isFetching) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = data?.map((boardgame: Boardgame) => (
			<BoardgamePanel key={boardgame.id} boardgame={boardgame}></BoardgamePanel>
		));
	}

	return (
		<>
			<div id='header' className='flex justify-between bg-teal-800 py-4 px-6'>
				<h1 className='text-2xl font-bold text-white'>Boardgame Library</h1>
				<div className='flex flex-row gap-4'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-row order border-teal-700 rounded-[4px] bg-white'
					>
						<div className='relative'>
							<div className='absolute inset-y-0 flex items-center pl-3'>
								<VscSearch className='h-4 w-4 text-gray-500' />
							</div>
							<input
								value={term}
								onChange={(e) => setTerm(e.target.value)}
								className='pl-9 py-2 w-full border-0 shadow-none rounded-[4px] focus:outline-teal-400 focus:outline-2 focus:ring-0 placeholder:text-gray-500'
								placeholder='Search'
							/>
						</div>
					</form>
					<Button
						buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
						className='border border-teal-700'
						onClick={() => setShowForm(!showForm)}
					>
						Add Boardgame
					</Button>
				</div>
			</div>
			<div id='page' className='container py-6 mx-auto'>
				{showForm && <AddBoardgameForm setShowForm={setShowForm} />}
				<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
					{content}
				</div>
			</div>
		</>
	);
}
