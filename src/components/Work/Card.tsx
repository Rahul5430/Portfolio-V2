'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BiLink } from 'react-icons/bi';
import { VscGithubInverted } from 'react-icons/vsc';
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
				block: 'nearest',
			});
		}
	}, [isActive]);

	return (
		<div
			ref={ref}
			className={`relative mb-3.5 flex transition-all duration-500 max-tablet:mb-0 ${isIntersecting ? 'transform-none opacity-100' : 'translate-y-20 opacity-0'} ${(isActive || allActive) && !isMobile ? 'col-span-3' : ''}`}
			style={{
				gridRow:
					!allActive && isActive && !isMobile
						? `${row + 1} / ${row + 1}`
						: 'auto',
			}}
		>
			<div
				ref={cardRef}
				className={`relative flex flex-1 flex-row items-start justify-start gap-0 overflow-hidden rounded-2xl p-3 pb-4 transition-all duration-500 before:absolute before:-inset-[2px] before:z-0 before:scale-[.8] before:rounded-[20px] before:opacity-0 before:transition-all before:duration-[333ms] before:content-[""] hover:before:scale-100 hover:before:bg-gradient-to-r hover:before:from-[#1E1C3280] hover:before:to-[#2B161D8C] hover:before:opacity-100 max-tablet:flex-row ${isActive || allActive ? 'cursor-default gap-2 before:!scale-100 before:bg-gradient-to-r before:from-[#1E1C3280] before:to-[#2B161D8C] before:opacity-100' : 'cursor-pointer'}`}
				onClick={onClick}
				role='button'
				tabIndex={0}
			>
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
				<div
					className={`flex flex-col px-5 transition-[opacity,transform] ${isActive || allActive ? 'translate-x-0 scale-100 opacity-100' : 'hidden -translate-x-full scale-0 opacity-0'}`}
				>
					<p className='z-10 pt-2 text-sm font-medium italic leading-[120%] -tracking-[0.11px] text-[#ECEDEE] opacity-[.55] max-tablet:pb-2 max-tablet:pt-0 max-tablet:text-xs'>
						{data.about}
					</p>
					<ul className='z-[9] list-disc py-2.5 duration-1000 max-tablet:pb-2 max-tablet:pt-0'>
						{data.description.map((item) => (
							<li
								key={item}
								className={`text-base font-medium leading-[120%] -tracking-[0.11px] text-[#ECEDEE] max-tablet:text-[15px] ${(isActive || allActive) && isMobile ? '!text-[13px]' : ''}`}
							>
								{item}
							</li>
						))}
					</ul>
					<div className='z-10 flex flex-row items-center gap-4 text-base font-medium leading-[120%] -tracking-[0.11px] text-[#ECEDEE] max-tablet:gap-2 max-tablet:text-[13px]'>
						Tech Stack:
						{data.technologies.map(({ label, icon, customBg }) => (
							<div
								key={`${data.workplace}-${label}`}
								className={`${customBg} flex h-9 w-9 items-center justify-center rounded-lg max-tablet:h-8 max-tablet:w-8`}
							>
								<Image
									src={icon}
									alt={label}
									className='h-[30px] w-auto max-tablet:h-[25px]'
								/>
							</div>
						))}
					</div>
					<div className='z-10 flex flex-row items-center py-2 text-base font-medium leading-[120%] -tracking-[0.11px] text-[#ECEDEE] max-tablet:py-0.5 max-tablet:text-[13px]'>
						Links:
						{data.links.map(({ label, url }) => (
							<a
								className='flex h-9 w-9 items-center justify-center rounded-lg pl-2 max-tablet:h-8 max-tablet:w-8'
								key={`${data.workplace}-${label}`}
								target='_blank'
								rel='noreferrer'
								href={url}
								onClick={(e) => e.stopPropagation()}
							>
								{label === 'GitHub' && (
									<VscGithubInverted
										color='#ECEDEE'
										className='h-[30px] w-auto max-tablet:h-[25px]'
									/>
								)}
								{label === 'Website' && (
									<BiLink
										color='#ECEDEE'
										className='h-[30px] w-auto max-tablet:h-[25px]'
									/>
								)}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
