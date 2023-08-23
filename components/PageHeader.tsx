import Image from 'next/image';

import StarUnderline from '@/public/star_underline.svg';

interface PageHeaderProps {
	title: string;
	about: string;
	gradientFrom?: string;
	gradientTo?: string;
}

const PageHeader = ({
	title,
	about,
	gradientFrom,
	gradientTo,
}: PageHeaderProps) => (
	<div className='flex-main flex-col justify-center w-[708px] gap-3 px-6 pb-3 pt-12'>
		<div className='w-auto h-auto whitespace-pre-wrap'>
			<p
				className={`font-bold text-[32px] leading-[40px] -tracking-[0.25px] gradient-text ${gradientFrom} ${gradientTo}`}
			>
				{title}
			</p>
		</div>
		<div className='w-[455px] h-auto whitespace-pre-wrap break-words'>
			<h3 className='text-[#ECEDEE] text-lg text-center leading-[140%]'>
				{about}
			</h3>
		</div>
		<div className='h-5 w-[332px]'>
			<Image src={StarUnderline} alt={title} className='w-full h-full' />
		</div>
	</div>
);

PageHeader.defaultProps = {
	gradientFrom: 'from-[#4AB1F1]',
	gradientTo: 'to-[#FF7B50]',
};

export default PageHeader;
