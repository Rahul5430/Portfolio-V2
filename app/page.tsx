import Link from 'next/link';

import Footer from '@/components/Footer';
import Contact from '@/components/Home/Contact';
import Me from '@/components/Home/Me';
import Navbar from '@/components/Navbar';
import WorkCards from '@/components/Work/WorkCards';

export default function Home() {
	return (
		<>
			<Navbar />
			<Me />
			<div className='flex-main flex-col gap-2.5'>
				<div className='px-4 flex-main justify-between w-full'>
					<div className='outline-none w-auto h-auto whitespace-pre'>
						<h3 className='uppercase font-semibold text-[#72788899] text-sm tracking-[3px] max-tablet:text-xs'>
							Current Work
						</h3>
					</div>
					<div className='z-10 outline-none w-auto h-auto whitespace-pre'>
						<h3 className='font-semibold text-[#0055FF] text-xs leading-[14px] -tracking-[0.2px]'>
							<Link
								href='/work'
								className='gradient-text from-[#4AB1F1] to-[#5B48D5]'
							>
								All Works ▸
							</Link>
						</h3>
					</div>
				</div>
				<WorkCards threshold={0.4} />
			</div>
			<Contact />
			<Footer />
		</>
	);
}
