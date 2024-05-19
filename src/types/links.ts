import { IconType } from 'react-icons';

export type NavLink = {
	label: string;
	href: string;
};

export type SocialLink = {
	Icon: IconType;
	label: string;
	href: string;
};

export type ContactLink = SocialLink & {
	color: string;
	bg: string;
};
