'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navLinks, socialLinks } from '@/data/links';
import useWindowSize from '@/hooks/useWindowSize';
import logo from '@/public/white.png';

const NavBtns = ({ isMobileNavOpen }: { isMobileNavOpen: boolean }) => (
	<div
		className={`items-start flex flex-none flex-row flex-nowrap gap-6 h-min w-min justify-start max-[809px]:flex-col max-[809px]:z-[1] max-[809px]:w-full ${
			isMobileNavOpen
				? 'opacity-100'
				: 'opacity-0 gap-0 overflow-hidden h-px'
		}`}
	>
		{navLinks.map(({ label, href }) => (
			<Link
				key={label}
				href={href}
				className='relative cursor-pointer no-underline'
			>
				<p className='hover-underline font-medium text-[#ECEDEE] text-base outline-none'>
					{label}
				</p>
			</Link>
		))}
	</div>
);

const AnimatedHamburgerIcon = ({
	isMobileNavOpen,
	setIsMobileNavOpen,
}: {
	isMobileNavOpen: boolean;
	setIsMobileNavOpen: (toggle: boolean) => void;
}) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events
	<div
		className='flex-main cursor-pointer h-4 w-4 justify-center gap-2.5'
		onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
		role='button'
		tabIndex={0}
	>
		{/* <div className='' />
		<div className='' />
		<div className='' /> */}
	</div>
);

const Navbar = () => {
	const { width } = useWindowSize();

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	useEffect(() => {
		if (width && width > 809 && isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
	}, [isMobileNavOpen, width]);

	return (
		<div className='flex-main w-full justify-center max-[809px]:p-3'>
			<div className='w-full rounded-xl flex-main justify-between p-4 bg-[#1C162F66] backdrop-blur-md border border-neutral-600/20 max-[809px]:pt-[18px] max-[809px]:pb-17px max-[809px]:items-start'>
				<div
					className={`flex-main justify-start gap-6 max-[809px]:flex-col max-[809px]:z-[1] max-[809px]:w-px max-[809px]:grow max-[809px]:items-start ${
						!isMobileNavOpen && 'max-[809px]:gap-0'
					}`}
				>
					<div className='w-7 h-auto'>
						<Link href='/'>
							<Image src={logo} alt='Logo' />
						</Link>
					</div>
					<NavBtns isMobileNavOpen={isMobileNavOpen} />
				</div>
				<div className='flex-main justify-start gap-3'>
					<div className='flex-main justify-center gap-4'>
						{socialLinks.map(({ Icon, label, href }) => (
							<a
								key={label}
								href={href}
								target='_blank'
								rel='noopener noreferrer'
								className='flex-main cursor-pointer gap-3.5 h-4 justify-center no-underline w-4'
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
	);
};

export default Navbar;
