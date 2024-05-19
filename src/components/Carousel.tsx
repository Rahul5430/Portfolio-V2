import Image from 'next/image';

import { CarouselDataType } from '@/types';

interface CarouselProps {
	data: CarouselDataType[];
}

const Carousel = ({ data }: CarouselProps) => {
	const carouselItemClassName = 'h-auto overflow-visible relative grayscale';

	return (
		<div className='flex-none h-auto opacity-70 relative w-708 max-tablet:h-16 max-tablet:w-full max-tablet:px-3'>
			<div className='flex-main h-8 justify-center gap-2.5 w-full opacity-70 px-4 py-8 max-tablet:h-full max-tablet:gap-0 max-tablet:px-0'>
				<div className='overflow-visible flex-none opacity-100 h-[200px] relative w-[676px] max-tablet:w-full'>
					<section
						className='flex w-full h-full max-w-full max-h-full m-0 p-2.5 opacity-100 items-center justify-center list-none overflow-hidden gap-12'
						style={{
							WebkitMaskImage:
								'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
						}}
					>
						<ul className='animate-carousel flex shrink-0 items-center justify-center list-none flex-row gap-12'>
							{data.map((item) => (
								<li key={`${item.name}_primary`}>
									<div className={carouselItemClassName}>
										<Image
											key={`${item.name}_primary`}
											src={item.imageUrl}
											alt={item.name}
											width={item.width}
											height={item.height}
											className='h-8 w-auto'
										/>
									</div>
								</li>
							))}
						</ul>
						<ul
							className='animate-carousel flex shrink-0 items-center justify-center list-none flex-row gap-12'
							aria-hidden='true'
						>
							{data.map((item) => (
								<li key={`${item.name}_secondary`}>
									<div className={carouselItemClassName}>
										<Image
											key={`${item.name}_secondary`}
											src={item.imageUrl}
											alt={item.name}
											width={item.width}
											height={item.height}
											className='h-8 w-auto'
										/>
									</div>
								</li>
							))}
						</ul>
						<ul
							className='animate-carousel flex shrink-0 items-center justify-center list-none flex-row gap-12'
							aria-hidden='true'
						>
							{data.map((item) => (
								<li key={`${item.name}_tertiary`}>
									<div className={carouselItemClassName}>
										<Image
											key={`${item.name}_tertiary`}
											src={item.imageUrl}
											alt={item.name}
											width={item.width}
											height={item.height}
											className='h-8 w-auto'
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
