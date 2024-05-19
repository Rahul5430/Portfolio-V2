'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { WorkType } from '@/types';

interface CardProps {
	data: WorkType;
	threshold: number;
}

const Card = ({ data, threshold }: CardProps) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{ threshold }
		);
		observer.observe(ref.current as Element);

		return () => observer.disconnect();
	}, [isIntersecting, threshold]);

	useEffect(() => {
		if (isIntersecting) {
			ref.current?.classList.add('transform-none', 'opacity-100');
		}
	}, [isIntersecting]);

	return (
		<div
			ref={ref}
			className='h-auto w-full relative transition-all duration-1000 translate-y-20 opacity-0'
		>
			<Link
				href={data.url}
				className='w-full rounded-2xl flex-main items-start flex-col cursor-pointer justify-start overflow-visible gap-2 p-3 pb-4 max-tablet:flex-row max-tablet:items-center relative group'
			>
				<div className='rounded-[20px] bg-gradient-to-r from-[#1E1C3280] to-[#2B161D8C] absolute origin-[50%_50%_0px] inset-0 h-[unset] opacity-0 group-hover:opacity-100 z-0 transition-all duration-500' />
				<div className='flex-main h-[200px] w-[200px] max-tablet:h-24 max-tablet:w-24 z-10 rounded-xl'>
					<Image
						src={data.imageUrl}
						alt={data.workplace}
						width={200}
						height={200}
						className='rounded-xl'
					/>
				</div>
				<div className='flex-main items-start gap-0.5 justify-start w-min flex-col max-tablet:gap-1 z-10'>
					<div className='outline-none flex flex-col justify-start shrink-0 flex-none h-auto whitespace-pre-wrap break-words w-[199px]'>
						<h2 className='text-base font-semibold -tracking-[0.11px] leading-[120%] text-[#ECEDEE] max-tablet:text-[15px]'>
							{data.workplace}
						</h2>
					</div>
					<div className='outline-none flex flex-col justify-start shrink-0 opacity-[.55] flex-none h-auto whitespace-pre w-auto'>
						<p className='text-[13px] font-medium -tracking-[0.08px] leading-[18px] text-[#FFFFFF99]'>
							{data.duration}
						</p>
					</div>
					<div className='outline-none flex flex-col justify-start shrink-0 opacity-60 self-stretch overflow-hidden flex-none h-10 whitespace-pre-wrap w-auto'>
						<p className='text-[15px] font-normal -tracking-[0.09px] leading-5 text-[#ECEDEE] max-tablet:text-sm max-tablet:leading-[140%]'>
							{data.position}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
