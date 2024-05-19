// import Image from 'next/image';

// import profilePic from '@/assets/rahul.JPG';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import pageData from '@/data/pages';

export default function Work() {
	return (
		<>
			<Navbar />
			<PageHeader data={pageData.about} />
			<div className=''>
				{/* <Image src={profilePic} alt='Picture of me' />
				<p className='speech-bubble'>
					Hello, <br /> World!
				</p> */}
			</div>
			<Footer />
		</>
	);
}
