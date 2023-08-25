import Footer from '@/components/Footer';
import Contact from '@/components/Home/Contact';
import Me from '@/components/Home/Me';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<>
			<Navbar />
			<Me />
			<Contact />
			<Footer />
		</>
	);
}
