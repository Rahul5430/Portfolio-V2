import Image from 'next/image';

import Pic from '@/assets/me.png';
import carouselData from '@/data/carousel';
import getBase64 from '@/functions/getBase64';

import Carousel from '../Carousel';

const Me = async () => {
	const base64 = await getBase64('/src/assets/me.png');

	return (
		<div className='flex-main w-full flex-col items-start justify-start gap-[18px] p-4 pt-8 max-tablet:px-3 max-tablet:pt-4'>
			<div className='flex-main w-auto justify-start gap-4'>
				<Image
					src={Pic}
					alt='Me'
					className='h-[90px] w-[90px] rounded-full'
					priority
					blurDataURL={base64}
				/>
				<div className='flex-main flex-col items-start justify-start gap-1'>
					<h1 className='text-3xl font-bold leading-[1.2em] -tracking-[1.5px] text-bright-gray max-tablet:text-[22px] max-tablet:leading-[130%] max-tablet:-tracking-[1px]'>
						Rahul Sharma
					</h1>
					<p className='text-base font-semibold leading-[22px] -tracking-[0.18px] text-[#72788899]'>
						Dreamer, Innovator, Visionary
					</p>
				</div>
			</div>
			<p className='text-xl font-normal leading-[29px] -tracking-[0.34px] text-bright-gray max-tablet:text-[17px] max-tablet:leading-[150%]'>
				A versatile full-stack cross-platform developer, blending
				creativity with technical expertise to craft seamless digital
				solutions. Specializing in brand design and creating essential
				design resources and tools.
			</p>
			<div className='flex-main items-start justify-start gap-2 max-tablet:gap-1'>
				<p className='text-lg font-medium leading-6 -tracking-[0.25px] text-[#72788899] max-tablet:text-[15px]'>
					Crafting Digital Realities, One Line of Code at a Time
				</p>
			</div>
			<Carousel data={carouselData} />
		</div>
	);
};

export default Me;
