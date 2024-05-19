import ACM from '@/assets/logos/acm.png';
import Foxmula from '@/assets/logos/foxmula.png';
import ISB from '@/assets/logos/indianstreetbets.webp';
import Padhakku from '@/assets/logos/padhakku.ico';
import StockBets from '@/assets/logos/stockbets.png';
import XEAM from '@/assets/logos/xeam.png';
import { CarouselDataType } from '@/types';

const carouselData: CarouselDataType[] = [
	{
		name: 'PEC ACM CSS',
		imageUrl: ACM,
		width: 1080,
		height: 396,
	},
	{
		name: 'StockBets',
		imageUrl: StockBets,
		width: 1080,
		height: 313,
	},
	{
		name: 'XEAM VENTURES Pvt. Ltd.',
		imageUrl: XEAM,
		width: 507,
		height: 178,
	},
	{
		name: 'Foxmula - The Smart Way',
		imageUrl: Foxmula,
		width: 162,
		height: 54,
	},
	{
		name: 'Padhakku Peek A Book Pvt Ltd',
		imageUrl: Padhakku,
		width: 256,
		height: 87,
	},
	{
		name: 'Indian Street Bets',
		imageUrl: ISB,
		width: 428,
		height: 104,
	},
];

export default carouselData;
