import { socialLinks } from '@/data/links';

const Footer = () => (
	<div className='flex-none h-auto relative w-full'>
		<div className='w-full flex-main flex-col justify-start gap-20 px-32 pt-20 pb-[60px]'>
			<div className='flex-main flex-col gap-3 justify-center w-min'>
				<div className='flex flex-col outline-none justify-start opacity-50 w-auto whitespace-pre'>
					<p className='font-medium text-[#72788899] text-base'>
						@rahul5430 {new Date().getFullYear()}
					</p>
				</div>
				<div className='flex-main items-start gap-4 justify-start w-min'>
					{socialLinks.map(({ label, href }) => (
						<div
							key={label}
							className='outline-none flex flex-col justify-start opacity-20 w-auto h-auto whitespace-pre'
						>
							<p className='text-xs text-white/60 font-medium'>
								<a
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									className='font-normal cursor-pointer no-underline outline-none text-xs text-white/60 hover:text-bright-gray leading-4 whitespace-pre'
								>
									{label}
								</a>
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex-main h-4 gap-2 justify-center w-min opacity-20'>
				<div className='outline-none flex flex-col justify-start w-auto whitespace-pre h-auto flex-none opacity-100'>
					<p className='text-xs text-white/60 font-medium'>
						Made with &#128153;(and Nextjs) by Rahul Sharma
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
