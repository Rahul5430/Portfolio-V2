import Image from 'next/image';

import { CarouselDataType } from '@/types';

interface CarouselProps {
	data: CarouselDataType[];
}

const Carousel = ({ data }: CarouselProps) => {
	const carouselItemClassName = 'h-auto overflow-visible relative grayscale';

	return (
		<div className='relative h-auto w-708 flex-none opacity-70 max-tablet:h-16 max-tablet:w-full max-tablet:px-3'>
			<div className='flex-main h-8 w-full justify-center gap-2.5 px-4 py-8 opacity-70 max-tablet:h-full max-tablet:gap-0 max-tablet:px-0'>
				<div className='relative h-[200px] w-[676px] flex-none overflow-visible opacity-100 max-tablet:w-full'>
					<section
						className='m-0 flex h-full max-h-full w-full max-w-full list-none items-center justify-center gap-12 overflow-hidden p-2.5 opacity-100'
						style={{
							WebkitMaskImage:
								'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
						}}
					>
						<ul className='flex shrink-0 animate-carousel list-none flex-row items-center justify-center gap-12'>
							{data.map((item) => (
								<li key={`${item.name}_primary`}>
									<div className={carouselItemClassName}>
										<Image
											key={`${item.name}_primary`}
											src={item.imageUrl}
											alt={item.name}
											className='h-8 w-auto'
											priority
										/>
									</div>
								</li>
							))}
						</ul>
						<ul
							className='flex shrink-0 animate-carousel list-none flex-row items-center justify-center gap-12'
							aria-hidden='true'
						>
							{data.map((item) => (
								<li key={`${item.name}_secondary`}>
									<div className={carouselItemClassName}>
										<Image
											key={`${item.name}_secondary`}
											src={item.imageUrl}
											alt={item.name}
											className='h-8 w-auto'
											priority
										/>
									</div>
								</li>
							))}
						</ul>
						<ul
							className='flex shrink-0 animate-carousel list-none flex-row items-center justify-center gap-12'
							aria-hidden='true'
						>
							{data.map((item) => (
								<li key={`${item.name}_tertiary`}>
									<div className={carouselItemClassName}>
										<Image
											key={`${item.name}_tertiary`}
											src={item.imageUrl}
											alt={item.name}
											className='h-8 w-auto'
											priority
										/>
									</div>
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
