import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { contactLinks } from '@/data/links';
import pageData from '@/data/pages';

export default function Work() {
	return (
		<>
			<Navbar />
			<PageHeader data={pageData.contact} />
			<div className='flex flex-row items-center justify-center gap-4'>
				{contactLinks.map(({ Icon, label, href, color, bg }) => (
					<a
						key={label}
						href={href}
						target='_blank'
						rel='noopener noreferrer'
						className={`flex items-center justify-center ${bg} h-11 w-11 rounded-full transition-all hover:scale-125`}
						aria-label={label}
					>
						<Icon color={color} size='25px' />
					</a>
				))}
			</div>
			<a
				href='/resume.pdf'
				target='_blank'
				rel='noopener noreferrer'
				className='rounded-md bg-gradient-to-l from-[#2B161D] to-[#1E1C32] px-[22px] py-[13px] font-medium leading-[1.1] text-white'
			>
				See My Resume
			</a>
			<Footer />
		</>
	);
}
