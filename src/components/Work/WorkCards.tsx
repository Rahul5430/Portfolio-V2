import workData from '@/data/work';

import Card from './Card';

const WorkCards = ({ threshold = 0.7 }) => (
	<div className='pb-10 max-tablet:w-full max-tablet:p-0'>
		<div className='w-708 p-1 max-tablet:w-full max-tablet:pb-[72px]'>
			<div className='grid w-full auto-rows-fr grid-cols-3 grid-rows-2 justify-center gap-3.5 max-tablet:grid-cols-[repeat(1,_minmax(200px,_1fr))] max-tablet:gap-3'>
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
