import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/white.png';

type NavLink = {
	label: string;
	href: string;
};

const navLinks: NavLink[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Work',
		href: 'work',
	},
	{
		label: 'About',
		href: 'about',
	},
	{
		label: 'Projects',
		href: 'projects',
	},
	{
		label: 'Contact',
		href: 'contact',
	},
];

const NavBtns = () => (
	<div className='items-start flex flex-none flex-row flex-nowrap gap-6 h-min w-min justify-start'>
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

const Navbar = () => (
	<div>
		<div className='w-full rounded-xl flex flex-row flex-nowrap items-center justify-between h-min p-4 bg-[#1C162F66] backdrop-blur-md border border-neutral-600/20'>
			<div className='flex flex-none flex-row flex-nowrap items-center justify-start gap-6 h-min'>
				<div className='w-7 h-auto'>
					<Link href='/'>
						<Image src={logo} alt='Logo' />
					</Link>
				</div>
				<NavBtns />
			</div>
			<div />
		</div>
	</div>
);

export default Navbar;
