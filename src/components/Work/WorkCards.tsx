'use client';

import { useState } from 'react';

import workData from '@/data/work';

import Card from './Card';

const WorkCards = ({ threshold = 0.7 }) => {
	const [activeCard, setActiveCard] = useState<number | null>(null);
	const [allActive, setAllActive] = useState(false);

	const activeButtonClassName =
		'text-white bg-[#F06844] bg-gradient-to-r from-[#F7BE2B] to-[#F537F9]';

	const handleOnClick = (index: number) => {
		setActiveCard(activeCard === index ? null : index);
	};

	return (
		<div className='flex-main w-full flex-col gap-2.5'>
			<div className='mx-auto flex items-center justify-center gap-3 text-[#72788899]'>
				<span className='text-xs font-semibold opacity-40'>Grid</span>
				<div className='flex justify-center rounded-[22px] bg-[#ecedee26] p-0.5'>
					<button
						type='button'
						className={`rounded-[18px] bg-transparent p-1 text-[#72788899] ${!allActive ? activeButtonClassName : ''}`}
						aria-label='grid'
						onClick={() => setAllActive(false)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							fillRule='evenodd'
							clipRule='evenodd'
							className='grid'
							viewBox='0 0 24 24'
						>
							<path d='M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z' />
							<path d='M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z' />
							<path d='M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z' />
							<path d='M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z' />
						</svg>
					</button>
					<button
						type='button'
						className={`rounded-[18px] bg-transparent p-1 text-[#72788899] ${allActive ? activeButtonClassName : ''}`}
						aria-label='list'
						onClick={() => setAllActive(true)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							fillRule='evenodd'
							clipRule='evenodd'
							className='list'
							viewBox='0 0 24 24'
						>
							<path d='M2.5 6C2.5 5.17157 3.17157 4.5 4 4.5H4.00833C4.83676 4.5 5.50833 5.17157 5.50833 6C5.50833 6.82843 4.83676 7.5 4.00833 7.5H4C3.17157 7.5 2.5 6.82843 2.5 6Z' />
							<path d='M9 4.75C8.30964 4.75 7.75 5.30964 7.75 6C7.75 6.69036 8.30964 7.25 9 7.25H20C20.6904 7.25 21.25 6.69036 21.25 6C21.25 5.30964 20.6904 4.75 20 4.75H9Z' />
							<path d='M9 10.75C8.30964 10.75 7.75 11.3096 7.75 12C7.75 12.6904 8.30964 13.25 9 13.25H20C20.6904 13.25 21.25 12.6904 21.25 12C21.25 11.3096 20.6904 10.75 20 10.75H9Z' />
							<path d='M7.75 18C7.75 17.3096 8.30964 16.75 9 16.75H20C20.6904 16.75 21.25 17.3096 21.25 18C21.25 18.6904 20.6904 19.25 20 19.25H9C8.30964 19.25 7.75 18.6904 7.75 18Z' />
							<path d='M4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5H4.00833C4.83676 13.5 5.50833 12.8284 5.50833 12C5.50833 11.1716 4.83676 10.5 4.00833 10.5H4Z' />
							<path d='M4 16.5C3.17157 16.5 2.5 17.1716 2.5 18C2.5 18.8284 3.17157 19.5 4 19.5H4.00833C4.83676 19.5 5.50833 18.8284 5.50833 18C5.50833 17.1716 4.83676 16.5 4.00833 16.5H4Z' />
						</svg>
					</button>
				</div>
				<span className='text-xs font-semibold opacity-40'>List</span>
			</div>
			<h3 className='text-sm font-medium text-[#72788899]'>
				(You can also click on a card to see more details)
			</h3>
			<h3 className='mt-6 text-sm font-semibold uppercase tracking-[3px] text-[#72788899] max-tablet:text-xs'>
				Internships
			</h3>
			<div className='pb-10 max-tablet:w-full max-tablet:p-0'>
				<div className='w-708 p-1 max-tablet:w-full max-tablet:pb-[72px]'>
					<div className='grid grid-flow-row-dense auto-rows-fr grid-cols-3 justify-center gap-3.5 max-tablet:auto-rows-auto max-tablet:grid-cols-[repeat(1,_minmax(200px,_1fr))] max-tablet:gap-3'>
						{workData.map((work, index) => (
							<Card
								key={work.workplace}
								index={index}
								data={work}
								threshold={threshold}
								isActive={activeCard === index}
								allActive={allActive}
								onClick={() => handleOnClick(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkCards;
