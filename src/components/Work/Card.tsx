'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useWindowSize from '@/hooks/useWindowSize';
import { WorkType } from '@/types';

interface CardProps {
	data: WorkType;
	threshold: number;
	index: number;
	isActive: boolean;
	allActive: boolean;
	onClick: () => void;
}

const Card = ({
	data,
	threshold,
	index,
	isActive,
	allActive,
	onClick,
}: CardProps) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [row, setRow] = useState(Math.floor(index / 3));

	const cardRef = useRef<HTMLDivElement>(null);

	const { width } = useWindowSize();

	const isMobile = (width && width < 809) as boolean;

	const { inView, ref } = useInView({
		triggerOnce: true,
		threshold,
	});

	useEffect(() => {
		if (inView) {
			setIsIntersecting(true);
		}
	}, [inView]);

	useEffect(() => {
		if (isMobile) {
			setRow(index);
		} else {
			setRow(Math.floor(index / 3));
		}
	}, [index, isMobile]);

	useEffect(() => {
		if (isActive) {
			cardRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	}, [isActive]);

	return (
		<div
			ref={ref}
			className={`relative mb-3.5 flex transition-all duration-1000 max-tablet:mb-0 ${isIntersecting ? 'transform-none opacity-100' : 'translate-y-20 opacity-0'} ${(isActive || allActive) && !isMobile ? 'col-span-3' : ''}`}
			style={{
				gridRow:
					!allActive && isActive && !isMobile
						? `${row + 1} / ${row + 1}`
						: 'auto',
			}}
		>
			<div
				ref={cardRef}
				className={`group relative flex flex-1 cursor-pointer flex-row items-start justify-start gap-0 overflow-hidden rounded-2xl p-3 pb-4 transition-all duration-500 max-tablet:flex-row max-tablet:items-center ${isActive || allActive ? 'gap-2' : ''}`}
				onClick={onClick}
				role='button'
				tabIndex={0}
			>
				<div
					className={`absolute inset-0 z-0 origin-[50%_50%_0px] rounded-[20px] bg-gradient-to-r from-[#1E1C3280] to-[#2B161D8C] opacity-0 transition-all duration-500 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''}`}
				/>
				<div
					className={`flex gap-2 ${isMobile && !isActive && !allActive ? 'flex-row items-center' : 'flex-col'}`}
				>
					<div className='z-10 flex h-[200px] w-[200px] rounded-xl max-tablet:h-24 max-tablet:w-24'>
						<Image
							src={data.imageUrl}
							alt={data.workplace}
							className='rounded-xl'
						/>
					</div>
					<div className='z-10 flex flex-col items-start justify-start gap-0.5 max-tablet:w-min max-tablet:gap-1'>
						<div
							className={`outline-none max-tablet:w-[199px] ${isMobile && (isActive || allActive) ? '!w-[96px]' : ''}`}
						>
							<h2
								className={`text-base font-semibold leading-[120%] -tracking-[0.11px] text-[#ECEDEE] max-tablet:text-[15px] ${(isActive || allActive) && isMobile ? '!text-[13px]' : ''}`}
							>
								{data.workplace}
							</h2>
						</div>
						<div className='opacity-[.55] outline-none'>
							<p className='text-[13px] font-medium leading-[18px] -tracking-[0.08px] text-[#FFFFFF99]'>
								{data.duration}
							</p>
						</div>
						<div className='h-10 w-auto whitespace-pre-wrap opacity-60 outline-none'>
							<p
								className={`text-[15px] font-normal leading-5 -tracking-[0.09px] text-[#ECEDEE] max-tablet:text-sm max-tablet:leading-[140%] ${(isActive || allActive) && isMobile ? '!text-[13px]' : ''}`}
							>
								{data.position}
							</p>
						</div>
					</div>
				</div>
				<ul
					className={`z-[9] list-disc px-5 py-2.5 transition-[opacity,transform] duration-1000 ${isActive || allActive ? 'translate-x-0 scale-100 opacity-100' : 'hidden -translate-x-full scale-0 opacity-0'}`}
				>
					{data.description.map((item) => (
						<li
							key={item}
							className={`text-base font-medium leading-[120%] -tracking-[0.11px] text-[#ECEDEE] max-tablet:text-[15px] ${(isActive || allActive) && isMobile ? '!text-[13px]' : ''}`}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Card;
