import Button from './Button';
import { FaTrash } from 'react-icons/fa';

export default function ButtonExamples() {
	return (
		<div>
			<div className='p-6 space-x-4 flex-wrap'>
				<Button
					buttonStyle={{ color: 'primary', rounded: 'lg', size: 'md' }}
					leftIcon={<FaTrash />}
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'secondary', rounded: 'lg', size: 'md' }}
					rightIcon={<FaTrash />}
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'danger', rounded: 'sm', size: 'sm' }}
					rightIcon={<FaTrash />}
				></Button>
				<Button
					buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'secondary', rounded: 'lg', size: 'md' }}
					leftIcon={<FaTrash />}
					isLoading={true}
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'danger', rounded: 'md', size: 'sm' }}
					disabled={true}
				>
					Disabled
				</Button>
				<Button>Default</Button>
			</div>
			<div className='p-6 space-x-4 flex-wrap'>
				All the colors: <br />
				<Button buttonStyle={{ color: 'primary', rounded: 'sm', size: 'sm' }}>
					Click
				</Button>
				<Button buttonStyle={{ color: 'secondary', rounded: 'sm', size: 'sm' }}>
					Click
				</Button>
				<Button buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}>
					Click
				</Button>
				<Button buttonStyle={{ color: 'warning', rounded: 'sm', size: 'sm' }}>
					Click
				</Button>
				<Button buttonStyle={{ color: 'danger', rounded: 'sm', size: 'sm' }}>
					Click
				</Button>
			</div>
			<div className='p-6 space-x-4 flex-wrap'>
				All the outline colors: <br />
				<Button
					buttonStyle={{ color: 'primary', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'secondary', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'warning', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'danger', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
			</div>
		</div>
	);
}
