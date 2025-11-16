import type { Boardgame } from '../types/boardgame';
import { useState } from 'react';
import { useFetchBoardgamesQuery } from '../store';
import BoardgamePanel from '../components/BoardgamePanel';
import AddBoardgameForm from '../components/AddBoardgameForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
	const [showForm, setShowForm] = useState(false);
	const [term, setTerm] = useState('');
	const { data, error, isFetching } = useFetchBoardgamesQuery();

	const filteredData = data?.filter((game) => {
		let keepGame = false;

		// if any of the props of the game include the search term, keep the game
		Object.values(game).forEach((value) => {
			if (!keepGame) {
				keepGame = value.toLowerCase().includes(term.toLowerCase());
			}
		});
		return keepGame;
	});

	let content: React.ReactNode;
	if (isFetching) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = filteredData?.map((boardgame: Boardgame) => (
			<BoardgamePanel key={boardgame.id} boardgame={boardgame}></BoardgamePanel>
		));
	}

	return (
		<div className='flex flex-col h-screen'>
			<Header
				term={term}
				setTerm={setTerm}
				showForm={showForm}
				setShowForm={setShowForm}
			/>
			<div className='container py-6 mx-auto flex-grow'>
				{showForm && <AddBoardgameForm setShowForm={setShowForm} />}
				<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
					{content}
				</div>
			</div>
			<Footer />
		</div>
	);
}
