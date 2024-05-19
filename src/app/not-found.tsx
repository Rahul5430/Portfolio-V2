import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex-main z-[2] -my-6 h-[970px] w-708 flex-col justify-center gap-[9px] px-5 pb-[400px] pt-[200px] max-tablet:-mt-2 max-tablet:h-min max-tablet:w-full max-tablet:gap-[11px] max-tablet:pb-[300px]'>
			<h1 className='gradient-text text-[220px] font-bold leading-[100%] -tracking-[.67px] max-tablet:text-[120px]'>
				404
			</h1>
			<h2 className='text-center text-[32px] font-medium -tracking-[.7px] text-[#888888] max-desktop:text-[20px] max-tablet:text-[16px]'>
				<Link href='/links' className='outline-none'>
					Something went wrong
				</Link>
			</h2>
			<Link
				href='/'
				className='rounded-[48px] bg-[#222] px-[19px] py-3 max-tablet:px-4 max-tablet:py-2.5'
			>
				<div className='w-auto outline-none'>
					<p className='text-center text-sm font-semibold text-white max-tablet:text-xs'>
						Go back home
					</p>
				</div>
			</Link>
		</div>
	);
}
