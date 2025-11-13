import Button from './Button';
import { TbTrash } from 'react-icons/tb';

export default function ButtonPage() {
	return (
		<div>
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
				></Button>
				<Button
					buttonStyle={{ color: 'success', rounded: 'sm', size: 'sm' }}
					buttonVariant='outline'
				>
					Click
				</Button>
				<Button
					buttonStyle={{ color: 'secondary', rounded: 'lg', size: 'md' }}
					leftIcon={<TbTrash />}
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
