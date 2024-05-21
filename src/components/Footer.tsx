import Image from 'next/image';

import Underline from '@/assets/underline.svg';
import { socialLinks } from '@/data/links';

const Footer = () => (
	<div className='relative h-auto w-full flex-none'>
		<div className='flex-main w-full flex-col justify-start gap-20 px-32 pb-[60px] pt-20'>
			<div className='flex-main w-min flex-col justify-center gap-3'>
				<div className='flex w-auto flex-col justify-start whitespace-pre opacity-50 outline-none'>
					<p className='text-base font-medium text-[#72788899]'>
						©rahul5430 <span>✦</span> {new Date().getFullYear()}
					</p>
				</div>
				<div className='flex-main w-min items-start justify-start gap-4'>
					{socialLinks.map(({ label, href }) => (
						<div
							key={label}
							className='flex h-auto w-auto flex-col justify-start whitespace-pre opacity-20 outline-none'
						>
							<p className='text-xs font-medium text-white/60'>
								<a
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									className='cursor-pointer whitespace-pre text-xs font-normal leading-4 text-white/60 no-underline outline-none hover:text-bright-gray'
								>
									{label}
								</a>
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex-main h-4 justify-center gap-2 opacity-20'>
				<div className='flex flex-row items-center justify-center whitespace-pre opacity-100 outline-none max-tablet:scale-[0.8]'>
					<Image
						src={Underline}
						alt='underline'
						className='opacity-40'
						style={{ transform: 'scale(-1,1)' }}
					/>
					<p className='px-3 text-sm font-medium text-white/60'>
						stay hungry, stay foolish
					</p>
					<Image
						src={Underline}
						alt='underline'
						className='opacity-40'
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
