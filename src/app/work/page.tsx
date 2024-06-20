import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import WorkCards from '@/components/Work/WorkCards';
import pageData from '@/data/pages';

export const metadata: Metadata = {
	title: 'Professional Work | Rahul Sharma - Full-Stack Cross-Platform Developer',
	description:
		'Discover the professional work of Rahul Sharma, a full-stack cross-platform developer. Explore case studies and client projects that showcase my expertise in web development and cross-platform solutions.',
	keywords:
		'professional work, case studies, client projects, full-stack developer, cross-platform development, Next.js, React, Rahul Sharma',
};

export default function Work() {
	return (
		<>
			<PageHeader data={pageData.work} />
			<WorkCards threshold={0.1} />
		</>
	);
}
