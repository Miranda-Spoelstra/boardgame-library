import Button from './components/button/Button';
import { TbTrash } from 'react-icons/tb';

function App() {
	return (
		<div className='p-6 space-x-4 flex-wrap'>
			<Button
				buttonStyle={{ color: 'primary', rounded: 'lg', size: 'md' }}
				leftIcon={<TbTrash />}
			>
				Click
			</Button>
			<Button
				buttonStyle={{ color: 'secondary', rounded: 'lg', size: 'md' }}
				rightIcon={<TbTrash />}
			>
				Click
			</Button>
			<Button
				buttonStyle={{ color: 'danger', rounded: 'lg', size: 'lg' }}
				rightIcon={<TbTrash />}
			>
			</Button>
			<Button
				buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
				buttonVariant='outline'
			>
				Click
			</Button>
			<Button
				buttonStyle={{ color: 'secondary', rounded: 'lg', size: 'md' }}
				isLoading={true}
			>
				Click
			</Button>
			<Button
				buttonStyle={{ color: 'danger', rounded: 'md', size: 'xs' }}
				disabled={true}
			>
				Click
			</Button>
			<Button>Default</Button>
		</div>
	);
}

export default App;
