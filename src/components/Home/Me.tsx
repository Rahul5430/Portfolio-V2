import Image from 'next/image';

import Pic from '@/assets/me.png';
import carouselData from '@/data/carousel';

import Carousel from '../Carousel';

const Me = () => (
	<div className='flex-main items-start flex-col w-full justify-start gap-[18px] p-4 pt-8 max-tablet:px-3 max-tablet:pt-4'>
		<div className='flex-main justify-start gap-4 w-auto'>
			<Image
				src={Pic}
				alt='Me'
				className='w-[90px] h-[90px] rounded-full'
			/>
			<div className='flex-main items-start flex-col justify-start gap-1'>
				<h1 className='text-bright-gray font-bold text-3xl -tracking-[1.5px] leading-[1.2em] max-tablet:text-[22px] max-tablet:-tracking-[1px] max-tablet:leading-[130%]'>
					Rahul Sharma
				</h1>
				<p className='text-[#72788899] font-semibold text-base -tracking-[0.18px] leading-[22px]'>
					Designer, Maker, Dreamer
				</p>
			</div>
		</div>
		<p className='font-normal text-bright-gray text-xl -tracking-[0.34px] leading-[29px] max-tablet:text-[17px] max-tablet:leading-[150%]'>
			A design wizard voyaging into the metaverse. I tell the story
			through my design and illustrations. I spent most of my time
			designing for brands and creating open-source design resources.
		</p>
		<div className='flex-main items-start justify-start gap-2 max-tablet:gap-1'>
			<p className='font-medium text-[#72788899] text-lg -tracking-[0.25px] leading-6 max-tablet:text-[15px]'>
				Building what I love at
			</p>
			<p className='font-semibold gradient-text from-[#4AB1F1] to-[#D749AF] text-lg -tracking-[0.25px] leading-6 max-tablet:text-[15px]'>
				@overlayz
			</p>
			<p className='font-medium text-[#72788899] text-lg -tracking-[0.25px] leading-6 max-tablet:text-[15px]'>
				studio
			</p>
		</div>
		<Carousel data={carouselData} />
	</div>
);

export default Me;
