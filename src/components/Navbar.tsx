'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import logo from '@/assets/white.png';
import { navLinks, socialLinks } from '@/data/links';
import useWindowSize from '@/hooks/useWindowSize';

const NavBtns = ({
	isMobileNavOpen,
	width,
}: {
	isMobileNavOpen: boolean;
	width: number | undefined;
}) => {
	let className = '';
	if ((width && width > 809) || isMobileNavOpen) {
		className = 'opacity-100 gap-6';
	} else {
		className = 'opacity-0 gap-0 overflow-hidden h-px';
	}

	return (
		<div
			className={`flex h-min w-min flex-none flex-row flex-nowrap items-start justify-start max-tablet:z-[1] max-tablet:w-full max-tablet:flex-col ${className}`}
		>
			{navLinks.map(({ label, href }) => (
				<Link
					key={label}
					href={href}
					className='relative cursor-pointer no-underline'
				>
					<p className='hover-underline text-base font-medium text-bright-gray outline-none'>
						{label}
					</p>
				</Link>
			))}
		</div>
	);
};

const AnimatedHamburgerIcon = ({
	isMobileNavOpen,
	setIsMobileNavOpen,
}: {
	isMobileNavOpen: boolean;
	setIsMobileNavOpen: (toggle: boolean) => void;
}) => {
	const spanClassName =
		'block absolute h-px opacity-100 bg-bright-gray rounded-sm left-0 transition-all duration-[250ms]';

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			className='relative h-4 w-4 rotate-0 cursor-pointer transition-all duration-500'
			onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
			role='button'
			tabIndex={0}
			aria-label='menu'
		>
			<span
				className={`${spanClassName} rotate-0 ${
					isMobileNavOpen
						? 'left-1/2 top-[7.5px] w-0'
						: 'top-0.5 w-3.5'
				}`}
			/>
			<span
				className={`${spanClassName} top-[7.5px] w-3.5 ${
					isMobileNavOpen ? 'rotate-45' : 'rotate-0'
				}`}
			/>
			<span
				className={`${spanClassName} top-[7.5px] w-3.5 ${
					isMobileNavOpen ? '-rotate-45' : 'rotate-0'
				}`}
			/>
			<span
				className={`${spanClassName} rotate-0 ${
					isMobileNavOpen
						? 'left-1/2 top-[7.5px] w-0'
						: 'top-[13px] w-3.5'
				}`}
			/>
		</div>
	);
};

const Navbar = () => {
	const { width } = useWindowSize();

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	useEffect(() => {
		if (width && width > 809 && isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
	}, [isMobileNavOpen, width]);

	return (
		<div className='flex-main relative w-full flex-col justify-center max-tablet:overflow-visible max-tablet:p-3'>
			<div className='max-tablet:flex-main relative h-[54.19px] w-full flex-none overflow-visible max-tablet:z-[2] max-tablet:h-[54.19px] max-tablet:items-start max-tablet:justify-center'>
				<div
					className={`flex-main w-full justify-between rounded-xl bg-[#1C162F66] p-4 ${
						(width && width > 809) || isMobileNavOpen
							? 'backdrop-blur-[20px]'
							: 'backdrop-blur-md'
					} border border-neutral-600/20 backdrop-blur-[20px] max-tablet:items-start max-tablet:pb-[17px] max-tablet:pt-[18px]`}
				>
					<div
						className={`flex-main justify-start max-tablet:z-[1] max-tablet:w-px max-tablet:grow max-tablet:flex-col max-tablet:items-start ${
							(width && width > 809) || isMobileNavOpen
								? 'gap-6'
								: 'gap-0'
						}`}
					>
						<div className='h-auto w-7'>
							<Link href='/'>
								<Image src={logo} alt='Logo' />
							</Link>
						</div>
						<NavBtns
							isMobileNavOpen={isMobileNavOpen}
							width={width}
						/>
					</div>
					<div className='flex-main justify-start gap-3'>
						<div className='flex-main justify-center gap-4'>
							{socialLinks.map(({ Icon, label, href }) => (
								<a
									key={label}
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									className='flex-main h-4 w-4 cursor-pointer justify-center gap-3.5 no-underline'
									aria-label={label}
								>
									<Icon color='white' />
								</a>
							))}
							{width && width <= 809 && (
								<AnimatedHamburgerIcon
									isMobileNavOpen={isMobileNavOpen}
									setIsMobileNavOpen={setIsMobileNavOpen}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
