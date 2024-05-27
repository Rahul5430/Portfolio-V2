import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type CarouselDataType = {
	name: string;
	imageUrl: StaticImport;
	width: number;
	height: number;
};

export type WorkType = {
	workplace: string;
	position: string;
	duration: string;
	description: string[];
	about: string;
	imageUrl: StaticImport;
	links: {
		label: 'GitHub' | 'Website';
		url: string;
	}[];
	technologies: {
		label: string;
		icon: StaticImport;
		customBg?: string;
	}[];
};

export type SkillsType = {
	label: string;
	url: string;
	imageUrl: StaticImport;
	percentage: number;
	customBg?: string;
};

export type ProjectType = {
	name: string;
	duration: string;
	description: string[];
	imageUrl: StaticImport;
	links: {
		label: 'GitHub' | 'Website';
		url: string;
	}[];
	technologies: {
		label: string;
		icon: StaticImport;
		customBg?: string;
	}[];
};
