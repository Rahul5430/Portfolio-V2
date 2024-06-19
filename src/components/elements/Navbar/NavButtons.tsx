import Link from 'next/link';

import { navLinks } from '@/data/links';

const NavButtons = ({
	isMobileNavOpen,
	width,
	handleLinkClick,
}: {
	isMobileNavOpen: boolean;
	width: number | undefined;
	handleLinkClick: () => void;
}) => {
	let navDivWidth: string | number | undefined;
	let className = '';

	if (width && width <= 809 && isMobileNavOpen) {
		navDivWidth = 'calc(100vw - 74px)';
	} else {
		navDivWidth = undefined;
	}

	if ((width && width > 809) || isMobileNavOpen) {
		className = 'opacity-100 gap-6 max-h-80';
	} else {
		className = 'opacity-0 gap-0 max-h-0';
	}

	return (
		<div
			className={`flex h-min w-min flex-none flex-row flex-nowrap items-start justify-start transition-all duration-150 ease-in-out max-tablet:z-[1] max-tablet:w-full max-tablet:flex-col ${className}`}
			style={{ width: navDivWidth }}
		>
			{navLinks.map(({ label, href }) => (
				<Link
					key={label}
					href={href}
					className='relative w-full cursor-pointer no-underline'
					onClick={handleLinkClick}
				>
					<p className='hover-underline text-base font-medium text-bright-gray outline-none'>
						{label}
					</p>
				</Link>
			))}
		</div>
	);
};

export default NavButtons;
