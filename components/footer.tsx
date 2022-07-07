import Container from './container';

const Footer = () => {
	return (
		<footer className='bg-neutral-50 border-t border-neutral-200'>
			<Container>
				<div className='py-28 flex flex-col lg:flex-row items-center'>
					<h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
						PETEPITTAWAT.DEV
					</h3>
					<div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
						<a
							href='https://webring.wonderful.software#petepittawat.dev'
							title='วงแหวนเว็บ'
						>
							<img
								alt='วงแหวนเว็บ'
								width='32'
								height='32'
								src='https://webring.wonderful.software/webring.svg'
							/>
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
