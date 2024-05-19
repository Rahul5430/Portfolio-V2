import Image from 'next/image';

import StarUnderline from '@/assets/star_underline.svg';

interface PageHeaderProps {
	title: string;
	about: string;
	gradientFrom?: string;
	gradientTo?: string;
}

const PageHeader = ({ data }: { data: PageHeaderProps }) => {
	const { title, about, gradientFrom, gradientTo } = data;

	return (
		<div className='flex-main w-708 flex-col justify-center gap-3 px-6 pb-3 pt-12 max-tablet:w-full max-tablet:pt-8'>
			<div className='h-auto w-auto whitespace-pre-wrap'>
				<p
					className={`gradient-text text-[32px] font-bold leading-[40px] -tracking-[0.25px] ${gradientFrom} ${gradientTo}`}
				>
					{title}
				</p>
			</div>
			<div className='h-auto w-[455px] whitespace-pre-wrap break-words max-tablet:w-full'>
				<h3 className='text-center text-lg font-normal leading-[140%] text-bright-gray max-tablet:text-base'>
					{about}
				</h3>
			</div>
			<div className='h-5 w-[332px]'>
				<Image
					src={StarUnderline}
					alt={title}
					className='h-full w-full'
				/>
			</div>
		</div>
	);
};

export default PageHeader;
