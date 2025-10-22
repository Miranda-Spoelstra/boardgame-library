import Button from './components/button/Button';

function App() {
	return (
		<div className='p-6 space-x-4 flex-wrap'>
			<Button buttonStyle={{ color: 'primary', rounded: 'lg', size: 'md' }}>
				Click
			</Button>
			<Button
				buttonStyle={{ color: 'primary', rounded: 'lg', size: 'md' }}
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
				buttonStyle={{ color: 'danger', rounded: 'lg', size: 'md' }}
				disabled={true}
			>
				Click
			</Button>
		</div>
	);
}

export default App;
