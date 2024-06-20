import type { Metadata } from 'next';
import Image from 'next/image';

import profilePic from '@/assets/rahul.JPG';
import SkillsSection from '@/components/About/SkillsSection';
import PageHeader from '@/components/PageHeader';
import pageData from '@/data/pages';
import getBase64 from '@/functions/getBase64';

export const metadata: Metadata = {
	title: 'About Me | Rahul Sharma - Full-Stack Cross-Platform Developer',
	description:
		'Learn more about Rahul Sharma, a full-stack cross-platform developer. Read about my skills, experience, and passion for developing high-quality web and cross-platform applications.',
	keywords:
		'about me, full-stack developer, cross-platform developer, web developer, Next.js, React, Node.js, Rahul Sharma',
};

export default async function About() {
	const base64 = await getBase64('src/assets/rahul.JPG');

	return (
		<>
			<PageHeader data={pageData.about} />
			<div className='flex flex-row items-center justify-evenly p-4 max-tablet:flex-col-reverse'>
				<p className='speech-bubble'>
					Hi, I&apos;m Rahul! As a full-stack cross-platform
					developer, I blend creativity with technical expertise to
					craft seamless, innovative, and user-friendly applications.
					With a deep passion for technology and a dedication to
					open-source contributions, I am committed to pushing the
					boundaries of what's possible in software development.
				</p>
				<Image
					src={profilePic}
					alt='Picture of me'
					className='h-auto w-[300px] cursor-pointer rounded-[11px] shadow-[5px_10px_18px_rgba(136,136,136,1)] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[5px_10px_18px_rgba(59,89,152,1)]'
					priority
					placeholder='blur'
					blurDataURL={base64}
				/>
			</div>
			<SkillsSection />
		</>
	);
}
