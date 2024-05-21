import dynamic from 'next/dynamic';

import skills from '@/data/skills';

const Skill = dynamic(() => import('./Skill'), { ssr: false });

const SkillsSection = () => (
	<div className='flex flex-col items-center justify-center'>
		<h3 className='mt-10 text-sm font-semibold uppercase tracking-[3px] text-[#72788899] max-tablet:text-xs'>
			Skills
		</h3>
		<div className='mt-4 flex flex-row flex-wrap items-center justify-center gap-[50px]'>
			{skills.map((skill) => (
				<Skill key={skill.label} skill={skill} />
			))}
		</div>
	</div>
);

export default SkillsSection;
