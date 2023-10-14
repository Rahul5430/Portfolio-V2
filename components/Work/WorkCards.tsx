import workData from '@/data/work';

import Card from './Card';

const WorkCards = ({ threshold = 0.7 }) => (
	<div className='pb-10 max-tablet:p-0 max-tablet:w-full'>
		<div className='p-1 w-708 max-tablet:pb-[72px] max-tablet:w-full'>
			<div className='gap-3.5 grid grid-cols-3 grid-rows-2 auto-rows-fr justify-center w-full max-tablet:gap-3 max-tablet:grid-cols-[repeat(1,_minmax(200px,_1fr))]'>
				{workData.map((work) => (
					<Card
						key={work.workplace}
						data={work}
						threshold={threshold}
					/>
				))}
			</div>
		</div>
	</div>
);

export default WorkCards;
