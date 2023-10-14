import { BsGithub, BsGoogle, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';
import { LuTwitter } from 'react-icons/lu';

import { ContactLink, NavLink, SocialLink } from '@/types/links';

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

export const contactLinks: ContactLink[] = [
	{
		Icon: BsGithub,
		label: 'GitHub',
		href: 'https://github.com/Rahul5430/',
		color: 'black',
		bg: 'bg-white',
	},
	{
		Icon: FaLinkedinIn,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/rahul5430/',
		color: 'white',
		bg: 'bg-[#0077B5]',
	},
	{
		Icon: BsGoogle,
		label: 'Mail',
		href: 'mailto:rahul2702sharma@gmail.com',
		color: 'white',
		bg: 'bg-[#D14836]',
	},
	{
		Icon: LuTwitter,
		label: 'Twitter',
		href: 'https://twitter.com/rahulSharma5430/',
		color: 'white',
		bg: 'bg-[#1DA1F2]',
	},
	{
		Icon: BsInstagram,
		label: 'Instagram',
		href: 'https://www.instagram.com/rahulsharma_8562/',
		color: 'white',
		bg: 'bg-[#E44054]',
	},
];
