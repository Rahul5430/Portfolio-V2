import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import ProjectCards from '@/components/Projects/ProjectCards';
import pageData from '@/data/pages';

export const metadata: Metadata = {
	title: 'Projects | Rahul Sharma - Full-Stack Cross-Platform Developer',
	description:
		'Explore the projects by Rahul Sharma, a full-stack cross-platform developer. See my portfolio of personal and collaborative projects using Next.js, React, Node.js, and more.',
	keywords:
		'projects, portfolio, web development projects, full-stack projects, cross-platform projects, Next.js, React, Node.js, Rahul Sharma',
};

export default function Work() {
	return (
		<>
			<PageHeader data={pageData.projects} />
			<ProjectCards threshold={0.1} />
		</>
	);
}
