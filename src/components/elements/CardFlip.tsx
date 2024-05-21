'use client';

import React, { useEffect, useState } from 'react';

interface Props {
	/**
	 * Custom container class name.
	 * @default undefined
	 */
	containerClassName?: string;
	/**
	 * False to show the front of the card, true to show the back
	 * @default undefined
	 */
	isFlipped?: boolean;
	onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	children: [React.ReactNode, React.ReactNode];
}

const CardFlip = (props: Props) => {
	const {
		containerClassName,
		isFlipped: maybeFlipped,
		onMouseEnter,
		onMouseLeave,
		children,
	} = props;
	const isFlipped = maybeFlipped ?? false;

	const [isFlippedState, setIsFlippedState] = useState(isFlipped);

	useEffect(() => {
		if (isFlipped !== isFlippedState) {
			setIsFlippedState(isFlipped);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFlipped]);

	const getComponent = (key: 0 | 1) => {
		if (children.length !== 2) {
			throw new Error(
				'Component CardFlip requires 2 children to function'
			);
		}
		return children[key];
	};

	const handleMouseEnter = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (onMouseEnter) {
			onMouseEnter(e);
		}
	};

	const handleMouseLeave = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (onMouseLeave) {
			onMouseLeave(e);
		}
	};

	const styles: React.CSSProperties = {
		WebkitBackfaceVisibility: 'hidden',
		backfaceVisibility: 'hidden',
		transformStyle: 'preserve-3d',
		transition: '0.6s',
	};

	return (
		<div
			className={`z-auto ${containerClassName}`}
			style={{ perspective: '1000px' }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className='relative h-full w-full'>
				<div
					className={`left-0 top-0 z-[2] h-full w-full ${isFlipped ? 'absolute' : 'relative'}`}
					style={{
						...styles,
						transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
					}}
				>
					{getComponent(0)}
				</div>

				<div
					className={`left-0 top-0 h-full w-full ${isFlipped ? 'relative' : 'absolute'}`}
					style={{
						...styles,
						transform: `rotateY(${isFlipped ? 0 : -180}deg)`,
					}}
				>
					{getComponent(1)}
				</div>
			</div>
		</div>
	);
};

export default CardFlip;
