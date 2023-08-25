import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='-my-6 flex-main justify-center flex-col gap-[9px] z-[2] h-[970px] w-708 px-5 pt-[200px] pb-[400px] max-tablet:gap-[11px] max-tablet:h-min max-tablet:pb-[300px] max-tablet:w-full max-tablet:-mt-2'>
			<h1 className='text-[220px] max-tablet:text-[120px] font-bold -tracking-[.67px] gradient-text leading-[100%]'>
				404
			</h1>
			<h2 className='text-[32px] max-desktop:text-[20px] max-tablet:text-[16px] font-medium text-center text-[#888888] -tracking-[.7px]'>
				<Link href='/links' className='outline-none'>
					Something went wrong
				</Link>
			</h2>
			<Link
				href='/'
				className='bg-[#222] rounded-[48px] py-3 px-[19px] max-tablet:px-4 max-tablet:py-2.5'
			>
				<div className='outline-none w-auto'>
					<p className='font-semibold text-white text-center text-sm max-tablet:text-xs'>
						Go back home
					</p>
				</div>
			</Link>
		</div>
	);
}
