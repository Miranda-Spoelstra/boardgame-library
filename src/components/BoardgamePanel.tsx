import type { Boardgame } from '../types/boardgame';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useRemoveBoardgameMutation } from '../store';
import Button from './button/Button';
import Panel from './Panel';

interface BoardgamePanelProps {
	boardgame: Boardgame;
	editBoardgame: (boardgame: Boardgame) => void;
}

export default function BoardgamePanel(props: BoardgamePanelProps) {
	const { boardgame, editBoardgame } = props;
	const [removeBoardgame] = useRemoveBoardgameMutation();

	return (
		<Panel>
			<div className='flex justify-between border-b-2 border-teal-200 pb-2'>
				<p className='text-lg'>{boardgame.name}</p>
				<div className='flex flex-row gap-2'>
					<Button
						buttonStyle={{ color: 'primary', rounded: 'sm', size: 'xs' }}
						leftIcon={<FaPencilAlt />}
						onClick={() => editBoardgame(boardgame)}
					></Button>
					<Button
						buttonStyle={{ color: 'danger', rounded: 'sm', size: 'xs' }}
						leftIcon={<FaTrash />}
						onClick={() => removeBoardgame(boardgame)}
					></Button>
				</div>
			</div>

			<div className='flex flex-col gap-2 pt-2'>
				<div className='flex flex-row gap-2'>
					<h3 className='font-bold'>Publisher:</h3>
					<p>{boardgame.publisher || '-'}</p>
				</div>
				<div className='flex flex-row gap-2'>
					<h3 className='font-bold'>Player Count:</h3>
					<p>{boardgame.playerCount || '-'}</p>
				</div>
				<div className='flex flex-row gap-2'>
					<h3 className='font-bold'>Average Duration:</h3>
					<p>{boardgame.duration || '-'}</p>
				</div>
				<div className='flex flex-row gap-2'>
					<h3 className='font-bold'>Mechanics:</h3>
					<p>{boardgame.mechanics || '-'}</p>
				</div>
				<div className='flex flex-row gap-2'>
					<h3 className='font-bold'>Recommended Age:</h3>
					<p>{boardgame.age || '-'}</p>
				</div>
			</div>
		</Panel>
	);
}
