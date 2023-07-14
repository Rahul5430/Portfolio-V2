import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { LuTwitter } from 'react-icons/lu';

import { NavLink, SocialLink } from '@/types/links';

export const navLinks: NavLink[] = [
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

export const socialLinks: SocialLink[] = [
	{
		Icon: BsLinkedin,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/rahul5430/',
	},
	{
		Icon: LuTwitter,
		label: 'Twitter',
		href: 'https://twitter.com/rahulSharma5430/',
	},
	{
		Icon: BsGithub,
		label: 'GitHub',
		href: 'https://github.com/Rahul5430/',
	},
	{
		Icon: BsInstagram,
		label: 'Instagram',
		href: 'https://www.instagram.com/rahulsharma_8562/',
	},
];
