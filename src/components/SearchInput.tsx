import { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
// import { useSearchBoardgameQuery } from '../store';

export default function SearchInput() {
  const [term, setTerm] = useState('');
  // const {data, error, isFetching} = useSearchBoardgameQuery();
  // const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // navigate(`/search?term=${term}`);
  };

  return (
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
	);
}