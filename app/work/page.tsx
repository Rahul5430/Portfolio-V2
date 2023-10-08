import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import WorkCards from '@/components/Work/WorkCards';

export default function Work() {
	return (
		<>
			<Navbar />
			<PageHeader
				title='Work'
				about="It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects"
				gradientFrom='from-[#8C2CE3]'
				gradientTo='to-[#FF2496]'
			/>
			<WorkCards />
			<Footer />
		</>
	);
}
