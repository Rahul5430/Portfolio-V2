import Image from 'next/image';
import { LuMail, LuTwitter } from 'react-icons/lu';

import ChatBG from '@/assets/chat.webp';

const Contact = () => (
	<div className='flex-main justify-center w-708 relative gap-2.5 max-tablet:p-3 max-tablet:w-full'>
		<div className='flex-main justify-between w-708 py-6 px-8 rounded-3xl bg-gradient-to-l from-[#2B161D8C] to-[#1E1C3280] max-tablet:w-px max-tablet:flex-col max-tablet:grow'>
			<div className='flex-main flex-col items-start gap-2.5 h-[229px] w-[314px] justify-center max-tablet:h-min max-tablet:order-1 max-tablet:gap-3 max-tablet:w-full'>
				<div className='flex-none w-full h-[169px] relative max-tablet:h-[156px]'>
					<div className='outline-none flex flex-col justify-start h-auto absolute opacity-80 left-0 top-[73px] whitespace-pre-wrap w-[314px] max-tablet:w-full'>
						<p className='font-normal text-bright-gray text-xl max-tablet:text-[17px] leading-[150%] tracking-[-0.34px]'>
							Want to create something awesome? Or, you have any
							query? Drop an email or tweet.
						</p>
					</div>
					<div className='outline-none flex flex-col justify-start h-auto absolute left-0 top-0 whitespace-pre w-auto'>
						<p className='font-bold text-[44px] max-tablet:text-[42px] max-tablet:leading-[120%] max-tablet:tracking-[-0.88px]'>
							<span
								className='bg-gradient-to-r from-[#F06844] to-[#6583C1] inline-block bg-clip-text text-transparent'
								style={{ WebkitTextFillColor: 'transparent' }}
							>
								Say hi!
							</span>
						</p>
					</div>
				</div>
				<div className='flex-main justify-start w-min gap-10'>
					<a
						className='flex-main gap-1 justify-center cursor-pointer w-min py-0.5 no-underline'
						target='_blank'
						rel='noopener noreferrer'
						href='https://twitter.com/rahulSharma5430/'
					>
						<div className='flex-main gap-2.5 h-4 w-4 justify-center overflow-visible'>
							<div className='flex-none h-5 w-5'>
								<LuTwitter size='1.25em' color='#1689EA' />
							</div>
						</div>
						<div className='flex flex-col flex-none justify-start shrink-0 whitespace-pre h-auto w-auto'>
							<p className='text-medium text-xl leading-8 max-tablet:text-lg'>
								<span
									className='bg-gradient-to-r from-[#1584EB] to-[#24D6D9] inline-block bg-clip-text text-transparent'
									style={{
										WebkitTextFillColor: 'transparent',
									}}
								>
									Tweet
								</span>
							</p>
						</div>
					</a>
					<a
						className='flex-main gap-1 justify-center cursor-pointer w-min py-0.5 no-underline'
						target='_blank'
						rel='noopener noreferrer'
						href='mailto:rahul2702sharma@gmail.com'
					>
						<div className='flex-main gap-2.5 h-4 w-4 justify-center overflow-visible'>
							<div className='flex-none h-5 w-5'>
								<LuMail size='1.25em' color='#ED6946' />
							</div>
						</div>
						<div className='flex flex-col flex-none justify-start shrink-0 whitespace-pre h-auto w-auto'>
							<p className='text-medium text-xl leading-8 max-tablet:text-lg'>
								<span
									className='bg-gradient-to-r from-[#F06844] to-[#6583C1] inline-block bg-clip-text text-transparent'
									style={{
										WebkitTextFillColor: 'transparent',
									}}
								>
									Mail
								</span>
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className='flex-none h-auto w-[275px] aspect-square max-tablet:order-none'>
				<Image
					src={ChatBG}
					alt='Chat'
					className='pointer-events-none select-none w-full h-full object-center object-cover'
				/>
			</div>
		</div>
	</div>
);

export default Contact;
