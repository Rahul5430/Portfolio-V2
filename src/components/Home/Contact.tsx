import Image from 'next/image';
import { LuMail, LuTwitter } from 'react-icons/lu';

import ChatBG from '@/assets/chat.webp';

const Contact = () => (
	<div className='flex-main relative w-708 justify-center gap-2.5 max-tablet:w-full max-tablet:p-3'>
		<div className='flex-main w-708 justify-between rounded-3xl bg-gradient-to-l from-[#2B161D8C] to-[#1E1C3280] px-8 py-6 max-tablet:w-px max-tablet:grow max-tablet:flex-col'>
			<div className='flex-main h-[229px] w-[314px] flex-col items-start justify-center gap-2.5 max-tablet:order-1 max-tablet:h-min max-tablet:w-full max-tablet:gap-3'>
				<div className='relative h-[169px] w-full flex-none max-tablet:h-[156px]'>
					<div className='absolute left-0 top-[73px] flex h-auto w-[314px] flex-col justify-start whitespace-pre-wrap opacity-80 outline-none max-tablet:w-full'>
						<p className='text-xl font-normal leading-[150%] tracking-[-0.34px] text-bright-gray max-tablet:text-[17px]'>
							Want to create something awesome? Or, you have any
							query? Drop an email or tweet.
						</p>
					</div>
					<div className='absolute left-0 top-0 flex h-auto w-auto flex-col justify-start whitespace-pre outline-none'>
						<p className='text-[44px] font-bold max-tablet:text-[42px] max-tablet:leading-[120%] max-tablet:tracking-[-0.88px]'>
							<span
								className='inline-block bg-gradient-to-r from-[#F06844] to-[#6583C1] bg-clip-text text-transparent'
								style={{ WebkitTextFillColor: 'transparent' }}
							>
								Say hi!
							</span>
						</p>
					</div>
				</div>
				<div className='flex-main w-min justify-start gap-10'>
					<a
						className='flex-main w-min cursor-pointer justify-center gap-1 py-0.5 no-underline'
						target='_blank'
						rel='noopener noreferrer'
						href='https://twitter.com/rahulSharma5430/'
					>
						<div className='flex-main h-4 w-4 justify-center gap-2.5 overflow-visible'>
							<div className='h-5 w-5 flex-none'>
								<LuTwitter size='1.25em' color='#1689EA' />
							</div>
						</div>
						<div className='flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
							<p className='text-medium text-xl leading-8 max-tablet:text-lg'>
								<span
									className='inline-block bg-gradient-to-r from-[#1584EB] to-[#24D6D9] bg-clip-text text-transparent'
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
						className='flex-main w-min cursor-pointer justify-center gap-1 py-0.5 no-underline'
						target='_blank'
						rel='noopener noreferrer'
						href='mailto:rahul2702sharma@gmail.com'
					>
						<div className='flex-main h-4 w-4 justify-center gap-2.5 overflow-visible'>
							<div className='h-5 w-5 flex-none'>
								<LuMail size='1.25em' color='#ED6946' />
							</div>
						</div>
						<div className='flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
							<p className='text-medium text-xl leading-8 max-tablet:text-lg'>
								<span
									className='inline-block bg-gradient-to-r from-[#F06844] to-[#6583C1] bg-clip-text text-transparent'
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
			<div className='aspect-square h-auto w-[275px] flex-none max-tablet:order-none'>
				<Image
					src={ChatBG}
					alt='Chat'
					className='pointer-events-none h-full w-full select-none object-cover object-center'
				/>
			</div>
		</div>
	</div>
);

export default Contact;
