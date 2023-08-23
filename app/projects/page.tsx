import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export default function Work() {
	return (
		<>
			<Navbar />
			<PageHeader
				title='Projects'
				about="It's not that difficult to find my contact information by searching rahul5430. Know little more about me here"
				gradientFrom='from-[#4AB1F1]'
				gradientTo='to-[#D749AF]'
			/>
			<Footer />
		</>
	);
}
