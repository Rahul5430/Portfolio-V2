import Contact from '@/components/Home/Contact';
import Me from '@/components/Home/Me';
import WorkCards from '@/components/Work/WorkCards';

export default function Home() {
	return (
		<>
			<Me />
			<WorkCards threshold={0.4} />
			<Contact />
		</>
	);
}
