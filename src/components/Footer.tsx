export function Footer() {
	return (
		<div className='flex flex-col gap-3 items-center justify-center w-full text-center'>
			<p className='text-sm text-olive-500 dark:text-olive-400'>
				Template by{" "}
				<a
					href='https://www.designerdada.com'
					target='_blank'
					rel='noopener noreferrer'
					className='link'>
					designerdada
				</a>
			</p>
			<p className='text-sm text-olive-500 dark:text-olive-400'>
				© {new Date().getFullYear()} Sabih Ur Rehman. All rights reserved.
			</p>
			<p className='text-sm text-olive-500 dark:text-olive-400'>
				<a
					href='https://github.com/sabih-source/'
					target='_blank'
					rel='noopener noreferrer'
					className='link'>
					GitHub
				</a>
			</p>
		</div>
	);
}
