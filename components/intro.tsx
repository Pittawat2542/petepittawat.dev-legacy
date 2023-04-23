import Image from "next/image";
import darkLogoSrc from '../public/assets/logo-dark.png';
import lightLogoSrc from '../public/assets/logo-light.png';

const Intro = () => {
	return (
		<section className='flex md:flex-row items-center md:justify-center mt-16 mb-16 md:mb-12'>
			<div className='dark:hidden max-w-2xl'>
				<Image src={lightLogoSrc} alt='PETEPITTAWAT.DEV' />
			</div>
			<div className='max-w-2xl hidden dark:block'>
				<Image src={darkLogoSrc} alt='PETEPITTAWAT.DEV' />
			</div>
		</section>
	);
};

export default Intro;
