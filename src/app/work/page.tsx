import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import WorkCards from '@/components/Work/WorkCards';
import pageData from '@/data/pages';

export default function Work() {
	return (
		<>
			<Navbar />
			<PageHeader data={pageData.work} />
			<WorkCards />
			<Footer />
		</>
	);
}
