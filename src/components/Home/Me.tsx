import Image from 'next/image';

import Pic from '@/assets/me.png';
import carouselData from '@/data/carousel';

import Carousel from '../Carousel';

const Me = () => (
	<div className='flex-main w-full flex-col items-start justify-start gap-[18px] p-4 pt-8 max-tablet:px-3 max-tablet:pt-4'>
		<div className='flex-main w-auto justify-start gap-4'>
			<Image
				src={Pic}
				alt='Me'
				className='h-[90px] w-[90px] rounded-full'
			/>
			<div className='flex-main flex-col items-start justify-start gap-1'>
				<h1 className='text-3xl font-bold leading-[1.2em] -tracking-[1.5px] text-bright-gray max-tablet:text-[22px] max-tablet:leading-[130%] max-tablet:-tracking-[1px]'>
					Rahul Sharma
				</h1>
				<p className='text-base font-semibold leading-[22px] -tracking-[0.18px] text-[#72788899]'>
					Designer, Maker, Dreamer
				</p>
			</div>
		</div>
		<p className='text-xl font-normal leading-[29px] -tracking-[0.34px] text-bright-gray max-tablet:text-[17px] max-tablet:leading-[150%]'>
			A design wizard voyaging into the metaverse. I tell the story
			through my design and illustrations. I spent most of my time
			designing for brands and creating open-source design resources.
		</p>
		<div className='flex-main items-start justify-start gap-2 max-tablet:gap-1'>
			<p className='text-lg font-medium leading-6 -tracking-[0.25px] text-[#72788899] max-tablet:text-[15px]'>
				Building what I love at
			</p>
			<p className='gradient-text from-[#4AB1F1] to-[#D749AF] text-lg font-semibold leading-6 -tracking-[0.25px] max-tablet:text-[15px]'>
				@overlayz
			</p>
			<p className='text-lg font-medium leading-6 -tracking-[0.25px] text-[#72788899] max-tablet:text-[15px]'>
				studio
			</p>
		</div>
		<Carousel data={carouselData} />
	</div>
);

export default Me;
