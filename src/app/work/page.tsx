import PageHeader from '@/components/PageHeader';
import WorkCards from '@/components/Work/WorkCards';
import pageData from '@/data/pages';

export default function Work() {
	return (
		<>
			<PageHeader data={pageData.work} />
			<WorkCards />
		</>
	);
}
