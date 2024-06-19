import dynamic from 'next/dynamic';

import Featured from '@/components/Home/Featured';
import Me from '@/components/Home/Me';

const Contact = dynamic(() => import('@/components/Home/Contact'));

export default function Home() {
	return (
		<>
			<Me />
			<Featured type='work' />
			<Featured type='project' />
			<Contact />
		</>
	);
}
