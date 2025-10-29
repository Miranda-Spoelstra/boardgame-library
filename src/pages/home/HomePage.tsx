import type { Boardgame } from '../../types/boardgame';
import { useState } from 'react';
import { TbPlus } from 'react-icons/tb';
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
		<div className='container my-6 mx-auto'>
			<div className='flex justify-between'>
				<h1 className='text-2xl font-bold'>Board Game List</h1>
				<Button leftIcon={<TbPlus />} onClick={() => setShowForm(!showForm)}>
					Add Boardgame
				</Button>
			</div>
			{showForm && <AddBoardgameForm setShowForm={setShowForm} />}
			<div className='grid grid-cols-3 gap-4 my-4'>{content}</div>
		</div>
	);
}
