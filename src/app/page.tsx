import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Featured from '@/components/Home/Featured';
import Me from '@/components/Home/Me';

const Contact = dynamic(() => import('@/components/Home/Contact'));

export const metadata: Metadata = {
	title: 'Full-Stack Cross-Platform Developer | Rahul Sharma',
	description:
		'Welcome to the portfolio of Rahul Sharma, a full-stack cross-platform developer with expertise in Next.js, React, Node.js, and more. Explore my work, projects, and get in touch.',
	keywords:
		'full-stack developer, cross-platform developer, Next.js, React developer, Node.js, portfolio, web development, Rahul Sharma',
};

export default function Home() {
	return (
		<>
			<Me />
			<Featured type='work' />
			<Featured type='project' />
			<Contact />
		</>
	);
}
