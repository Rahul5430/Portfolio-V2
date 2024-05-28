import PageHeader from '@/components/PageHeader';
import ProjectCards from '@/components/Projects/ProjectCards';
import pageData from '@/data/pages';

export default function Work() {
	return (
		<>
			<PageHeader data={pageData.projects} />
			<ProjectCards threshold={0.4} />
		</>
	);
}
