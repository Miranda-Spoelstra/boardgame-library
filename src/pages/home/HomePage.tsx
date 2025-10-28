import { useFetchBoardgamesQuery } from '../../store';

export default function HomePage() {
	const { data, error, isFetching } = useFetchBoardgamesQuery('all');

	let content;
	if (isFetching) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = data.map((boardgame: any) => {
			return boardgame.name;
		});
	}

	return (
		<div className='container py-12 space-y-8'>
			<div className='space-y-6 text-center'>
				<h1 className='text-2xl font-bold'>Board Game List</h1>
			</div>
			<div>{content}</div>
		</div>
	);
}
