import {
	useAddBoardgameMutation,
	useFetchBoardgamesQuery,
	useRemoveBoardgameMutation,
} from '../../store';
import Button from '../../components/button/Button';
import { TbPlus, TbTrash } from 'react-icons/tb';
import type { Boardgame } from '../../types/boardgame';

export default function HomePage() {
	const { data, error, isFetching } = useFetchBoardgamesQuery('all');
	const [addBoardgame, addResults] = useAddBoardgameMutation();
	// const [removeBoardGame, removeResults] = useRemoveBoardgameMutation();

	const handleAddBoardgame = () => {
		addBoardgame('');
	};

	// const handleRemoveBoardGame = (id: string) => {
	// 	removeBoardGame(id);
	// };

	let content;
	if (isFetching) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = data?.map((boardgame: Boardgame) => {
			return (
				<div key={boardgame.id} className='m-2'>
          {/* {boardgame.id} {boardgame.name}
					<Button
						className='mr-2'
						buttonStyle={{ color: 'danger', rounded: 'xs', size: 'xs' }}
						leftIcon={<TbTrash />}
						onClick={() => handleRemoveBoardGame(boardgame.id)}
					></Button> */}
					{boardgame.name}
				</div>
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
			<div className='flex flex-row flex-wrap'>{content}</div>
		</div>
	);
}
