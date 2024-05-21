import Link from 'next/link';

import Contact from '@/components/Home/Contact';
import Me from '@/components/Home/Me';
import WorkCards from '@/components/Work/WorkCards';

export default function Home() {
	return (
		<>
			<Me />
			<div className='flex-main w-full flex-col gap-2.5'>
				<div className='flex-main w-full justify-between px-4'>
					<div className='h-auto w-auto whitespace-pre outline-none'>
						<h3 className='text-sm font-semibold uppercase tracking-[3px] text-[#72788899] max-tablet:text-xs'>
							Current Work
						</h3>
					</div>
					<div className='z-10 h-auto w-auto whitespace-pre outline-none'>
						<h3 className='text-xs font-semibold leading-[14px] -tracking-[0.2px] text-[#0055FF]'>
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
		</>
	);
}
