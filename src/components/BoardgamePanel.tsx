import type { Boardgame } from '../types/boardgame';
import { TbTrash } from 'react-icons/tb';
import { useRemoveBoardgameMutation } from '../store';
import Button from './button/Button';
import Panel from './Panel';

interface BoardgamePanelProps {
	boardgame: Boardgame;
}

export default function BoardgamePanel(props: BoardgamePanelProps) {
	const { boardgame } = props;
	const [removeBoardGame, results] = useRemoveBoardgameMutation();

	const handleRemoveBoardGame = (boardgame: Boardgame) => {
		removeBoardGame(boardgame);
	};

	return (
		<Panel>
			<Button
				buttonStyle={{ color: 'danger', rounded: 'xs', size: 'xs' }}
				leftIcon={<TbTrash />}
				buttonVariant='outline'
				className='mr-2'
				onClick={() => handleRemoveBoardGame(boardgame)}
			></Button>
			{boardgame.name}
		</Panel>
	);
}
