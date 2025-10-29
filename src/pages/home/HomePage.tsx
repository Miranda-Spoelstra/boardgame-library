import {
	useAddBoardgameMutation,
	useFetchBoardgamesQuery
} from '../../store';
import Button from '../../components/button/Button';
import { TbPlus } from 'react-icons/tb';
import type { Boardgame } from '../../types/boardgame';
import BoardgamePanel from '../../components/BoardGamePanel';

export default function HomePage() {
	const { data, error, isFetching } = useFetchBoardgamesQuery();
	const [addBoardgame, results] = useAddBoardgameMutation();

	const handleAddBoardgame = () => {
		addBoardgame('');
	};

	let content: React.ReactNode;
	if (isFetching) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = data?.map((boardgame: Boardgame) => {
			return (
				<BoardgamePanel key={boardgame.id} boardgame={boardgame}></BoardgamePanel>
			);
		});
	}

	return (
		<div className='container my-6 mx-auto'>
			<div className='flex justify-between'>
				<h1 className='text-2xl font-bold'>Board Game List</h1>
				<Button leftIcon={<TbPlus />} onClick={() => handleAddBoardgame()}>
					Add Boardgame
				</Button>
			</div>
			<div className='grid grid-cols-3 gap-4 my-4'>{content}</div>
		</div>
	);
}
