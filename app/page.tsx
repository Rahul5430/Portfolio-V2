import Footer from '@/components/Footer';
import Contact from '@/components/Home/Contact';
import Me from '@/components/Home/Me';
import Navbar from '@/components/Navbar';
import WorkCards from '@/components/Work/WorkCards';

export default function Home() {
	return (
		<>
			<Navbar />
			<Me />
			<WorkCards />
			<Contact />
			<Footer />
		</>
	);
}
