'use client';

import Link from 'next/link';
import { useState } from 'react';

import { featuredProjects, featuredWork } from '@/data/featured';

import Card, { isWorkType } from '../elements/Card';

type FeaturedProps = {
	type: 'work' | 'project';
	threshold?: number;
};

const Featured = ({ type, threshold = 0.05 }: FeaturedProps) => {
	const [activeCard, setActiveCard] = useState(-1);

	const data = type === 'work' ? featuredWork : featuredProjects;

	const handleOnClick = (index: number) => {
		setActiveCard(activeCard === index ? -1 : index);
	};

	return (
		<div className='flex-main w-full flex-col gap-2.5'>
			<div className='flex-main w-full justify-between px-4'>
				<div className='h-auto w-auto whitespace-pre outline-none'>
					<h3 className='text-sm font-semibold uppercase tracking-[3px] text-[#9799AA] max-tablet:text-xs'>
						Featured {type === 'work' ? 'Work' : 'Projects'}
					</h3>
				</div>
				<div className='z-10 h-auto w-auto whitespace-pre outline-none'>
					<h3 className='text-xs font-semibold leading-[14px] -tracking-[0.2px] text-[#0055FF]'>
						<Link
							href={`/${type === 'work' ? 'work' : 'projects'}`}
							className='gradient-text from-[#4AB1F1] to-[#5B48D5]'
						>
							All {type === 'work' ? 'Work' : 'Projects'} ▸
						</Link>
					</h3>
				</div>
			</div>
			<div className='max-tablet:w-full'>
				<div className='w-708 p-1 max-tablet:w-full'>
					<div className='grid grid-flow-row-dense auto-rows-fr grid-cols-3 justify-center gap-3.5 max-tablet:auto-rows-auto max-tablet:grid-cols-[repeat(1,_minmax(200px,_1fr))] max-tablet:gap-3'>
						{data.map((item, index) => (
							<Card
								key={
									isWorkType(item)
										? item.workplace
										: item.name
								}
								index={index}
								data={item}
								threshold={threshold}
								isActive={activeCard === index}
								onClick={() => handleOnClick(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
