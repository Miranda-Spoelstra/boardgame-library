import type { Boardgame } from '../types/boardgame';
import { useState } from 'react';
import { useFetchBoardgamesQuery } from '../store';
import BoardgamePanel from '../components/BoardgamePanel';
import BoardgameForm from '../components/BoardgameForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
	const [showForm, setShowForm] = useState(false);
	const [editData, setEditData] = useState<Boardgame | undefined>(undefined);
	const [term, setTerm] = useState('');
	const { data, error, isFetching } = useFetchBoardgamesQuery();

	const filteredData = data?.filter((game) => {
		let keepGame = false;

		// if any of the props (except id) of the game include the search term, keep the game
		Object.entries(game).forEach(([key, value]) => {
			if (key !== 'id' && !keepGame) {
				keepGame = value.toLowerCase().includes(term.toLowerCase());
			}
		});
		return keepGame;
	});

	const handleEdit = (boardgame: Boardgame) => {
		setShowForm(true);
		setEditData(boardgame);
	};

	let content: React.ReactNode;
	if (isFetching) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = filteredData?.map((boardgame: Boardgame) => (
			<BoardgamePanel
				key={boardgame.id}
				boardgame={boardgame}
				editBoardgame={handleEdit}
			></BoardgamePanel>
		));
	}

	return (
		<div className='flex flex-col h-screen'>
			<Header
				term={term}
				setTerm={setTerm}
				showForm={showForm}
				setShowForm={setShowForm}
				setEditData={setEditData}
			/>
			<div className='container py-6 mx-auto flex-grow'>
				{showForm && (
					<BoardgameForm
						setShowForm={setShowForm}
						editData={editData}
						setEditData={setEditData}
					/>
				)}
				<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
					{content}
				</div>
			</div>
			<Footer />
		</div>
	);
}
