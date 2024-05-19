import Image from 'next/image';

import profilePic from '@/assets/rahul.JPG';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import pageData from '@/data/pages';

export default function Work() {
	return (
		<>
			<Navbar />
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
				/>
			</div>
			<Footer />
		</>
	);
}
