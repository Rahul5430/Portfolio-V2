'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import CardFlip from '@/components/elements/CardFlip';
import { SkillsType } from '@/types';

const Skill = ({ skill }: { skill: SkillsType }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const { inView, ref } = useInView({
		triggerOnce: true,
		threshold: 1,
		rootMargin: '0px 0px -30px 0px',
	});

	useEffect(() => {
		if (inView) {
			setIsFlipped(true);
			const timeOut = setTimeout(() => setIsFlipped(false), 1000);

			return () => clearTimeout(timeOut);
		}

		return () => {};
	}, [inView]);

	return (
		<a
			ref={ref}
			href={skill.url}
			aria-label={skill.label}
			target='_blank'
			rel='noreferrer'
		>
			<CardFlip
				key={skill.label}
				isFlipped={isFlipped}
				onMouseEnter={() => setIsFlipped(true)}
				onMouseLeave={() => setIsFlipped(false)}
				containerClassName='flex items-center justify-center'
			>
				<div
					className={`flex h-[76px] w-[76px] items-center justify-center rounded-lg max-tablet:h-[68px] max-tablet:w-[68px] ${skill.customBg}`}
				>
					<Image
						src={skill.imageUrl}
						alt={skill.label}
						className='h-[60px] w-[60px]'
					/>
				</div>
				<div
					className={`relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-lg border max-tablet:h-[68px] max-tablet:w-[68px]  ${skill.customBg}`}
				>
					<div className='absolute inset-0 flex items-center justify-center bg-white opacity-80'>
						<span className='text-2xl font-bold text-black opacity-100'>
							{skill.percentage}%
						</span>
					</div>
					<Image
						src={skill.imageUrl}
						alt={skill.label}
						className='h-[60px] w-[60px]'
					/>
				</div>
			</CardFlip>
		</a>
	);
};

export default Skill;
