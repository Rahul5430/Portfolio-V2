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
			className='relative h-auto w-full translate-y-20 opacity-0 transition-all duration-1000'
		>
			<Link
				href={data.url}
				className='flex-main group relative w-full cursor-pointer flex-col items-start justify-start gap-2 overflow-visible rounded-2xl p-3 pb-4 max-tablet:flex-row max-tablet:items-center'
			>
				<div className='absolute inset-0 z-0 h-[unset] origin-[50%_50%_0px] rounded-[20px] bg-gradient-to-r from-[#1E1C3280] to-[#2B161D8C] opacity-0 transition-all duration-500 group-hover:opacity-100' />
				<div className='flex-main z-10 h-[200px] w-[200px] rounded-xl max-tablet:h-24 max-tablet:w-24'>
					<Image
						src={data.imageUrl}
						alt={data.workplace}
						width={200}
						height={200}
						className='rounded-xl'
					/>
				</div>
				<div className='flex-main z-10 w-min flex-col items-start justify-start gap-0.5 max-tablet:gap-1'>
					<div className='flex h-auto w-[199px] flex-none shrink-0 flex-col justify-start whitespace-pre-wrap break-words outline-none'>
						<h2 className='text-base font-semibold leading-[120%] -tracking-[0.11px] text-[#ECEDEE] max-tablet:text-[15px]'>
							{data.workplace}
						</h2>
					</div>
					<div className='flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-[.55] outline-none'>
						<p className='text-[13px] font-medium leading-[18px] -tracking-[0.08px] text-[#FFFFFF99]'>
							{data.duration}
						</p>
					</div>
					<div className='flex h-10 w-auto flex-none shrink-0 flex-col justify-start self-stretch overflow-hidden whitespace-pre-wrap opacity-60 outline-none'>
						<p className='text-[15px] font-normal leading-5 -tracking-[0.09px] text-[#ECEDEE] max-tablet:text-sm max-tablet:leading-[140%]'>
							{data.position}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
