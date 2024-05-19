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
	url: string;
	companyUrl: string;
	imageUrl: StaticImport;
};
