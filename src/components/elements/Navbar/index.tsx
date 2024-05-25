'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import logo from '@/assets/white.png';
import { socialLinks } from '@/data/links';
import useWindowSize from '@/hooks/useWindowSize';

const NavButtons = dynamic(() => import('./NavButtons'), { ssr: false });
const AnimatedHamburgerIcon = dynamic(() => import('./AnimatedHamburgerIcon'), {
	ssr: false,
});

const Navbar = () => {
	const { width } = useWindowSize();
	const pathname = usePathname();

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (width && width > 809 && isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
	}, [isMobileNavOpen, width]);

	useEffect(() => {
		if (isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setIsMobileNavOpen(false);
			}
		};

		if (isMobileNavOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMobileNavOpen]);

	const handleLinkClick = () => {
		if (isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
	};

	return (
		<div
			ref={navRef}
			className='flex-main relative w-full flex-col justify-center max-tablet:overflow-visible max-tablet:p-3'
		>
			<div className='max-tablet:flex-main relative h-[54.19px] w-full flex-none overflow-visible max-tablet:z-[2] max-tablet:h-[54.19px] max-tablet:items-start max-tablet:justify-center'>
				<div
					className={`flex-main w-full justify-between rounded-xl bg-[#1C162F66] p-4 ${
						(width && width > 809) || isMobileNavOpen
							? 'backdrop-blur-[20px]'
							: 'backdrop-blur-md'
					} border border-neutral-600/20 backdrop-blur-[20px] max-tablet:items-start max-tablet:pb-[17px] max-tablet:pt-[18px]`}
				>
					<div
						className={`flex-main justify-start transition-all duration-150 max-tablet:z-[1] max-tablet:w-px max-tablet:grow max-tablet:flex-col max-tablet:items-start ${
							(width && width > 809) || isMobileNavOpen
								? 'gap-6'
								: 'gap-0'
						}`}
					>
						<div className='h-auto w-7'>
							<Link href='/' onClick={handleLinkClick}>
								<Image src={logo} alt='Logo' />
							</Link>
						</div>
						<NavButtons
							isMobileNavOpen={isMobileNavOpen}
							width={width}
							handleLinkClick={handleLinkClick}
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
