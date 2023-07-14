import Image from 'next/image';
import Link from 'next/link';

import { navLinks, socialLinks } from '@/data/links';
import logo from '@/public/white.png';

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
	<div className='w-[708px]'>
		<div className='w-full rounded-xl flex-main justify-between p-4 bg-[#1C162F66] backdrop-blur-md border border-neutral-600/20'>
			<div className='flex-main justify-start gap-6'>
				<div className='w-7 h-auto'>
					<Link href='/'>
						<Image src={logo} alt='Logo' />
					</Link>
				</div>
				<NavBtns />
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
				</div>
			</div>
		</div>
	</div>
);

export default Navbar;
