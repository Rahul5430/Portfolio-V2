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
		<div className='flex-main flex-col justify-center w-708 gap-3 px-6 pb-3 pt-12 max-tablet:w-full max-tablet:pt-8'>
			<div className='w-auto h-auto whitespace-pre-wrap'>
				<p
					className={`font-bold text-[32px] leading-[40px] -tracking-[0.25px] gradient-text ${gradientFrom} ${gradientTo}`}
				>
					{title}
				</p>
			</div>
			<div className='w-[455px] h-auto whitespace-pre-wrap break-words max-tablet:w-full'>
				<h3 className='font-normal text-bright-gray text-lg text-center leading-[140%] max-tablet:text-base'>
					{about}
				</h3>
			</div>
			<div className='h-5 w-[332px]'>
				<Image
					src={StarUnderline}
					alt={title}
					className='w-full h-full'
				/>
			</div>
		</div>
	);
};

export default PageHeader;
