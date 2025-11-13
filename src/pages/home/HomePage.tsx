import type { Boardgame } from '../../types/boardgame';
import { useState } from 'react';
import { useFetchBoardgamesQuery } from '../../store';
import Button from '../../components/button/Button';
import BoardgamePanel from '../../components/BoardgamePanel';
import AddBoardgameForm from './AddBoardgameForm';

export default function HomePage() {
	const [showForm, setShowForm] = useState(false);
	const { data, error, isFetching } = useFetchBoardgamesQuery();

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
		<div>
			<div id='header' className='flex justify-between bg-teal-800 py-4 px-6'>
				<h1 className='text-2xl font-bold text-white'>Boardgame Library</h1>
				<Button
					buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
					className='border border-teal-700'
					onClick={() => setShowForm(!showForm)}
				>
					Add Boardgame
				</Button>
			</div>
			<div id='page' className='container py-6 mx-auto'>
				{showForm && <AddBoardgameForm setShowForm={setShowForm} />}
				<div className='grid grid-cols-3 gap-4 my-4'>{content}</div>
			</div>
		</div>
	);
}
