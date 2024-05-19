/* eslint-disable quotes */
import ACM from '@/assets/logos/acm_background.png';
import Foxmula from '@/assets/logos/foxmula_background.png';
import ISB from '@/assets/logos/indianstreetbets_background.png';
import Padhakku from '@/assets/logos/padhakku_background.png';
import StockBets from '@/assets/logos/stockbets_background.png';
import XEAM from '@/assets/logos/xeam_background.png';
import { WorkType } from '@/types';

const workData: WorkType[] = [
	{
		workplace: 'Stock Bets',
		position: 'CO-CTO',
		duration: 'Sep 2023 - Present',
		description: [
			'Collaborated with clients to understand their technical needs and provide software solutions tailored to their specific requirements.',
			'Collaborated with cross-functional teams to ensure a seamless development and delivery process.',
			'Assisted in developing and maintaining the codebase for mobile and web applications to ensure seamless functionality across multiple platforms.',
		],
		about: "Founded in 2023, StockBets is a cutting-edge platform that revolutionizes stock trading with its AI-driven and blockchain-based technology. We empower traders of all levels to explore the financial markets, make informed investment decisions, and compete in virtual trading competitions. With our advanced AI algorithms, we provide real-time market insights, predictive analytics, and personalized recommendations to maximize trading potential.\n\nAt StockBets, we believe in the power of innovation and collaboration. Our community of traders and finance enthusiasts connect, share insights, and learn from each other, fostering a dynamic environment of growth and knowledge exchange. Whether you're a beginner looking to gain experience or a seasoned trader seeking new opportunities, StockBets offers a secure and immersive virtual investing experience.",
		url: '/work/stockbets',
		companyUrl: 'https://stockbets.in/',
		imageUrl: StockBets,
	},
	{
		workplace: 'PEC ACM',
		position: 'Open Source Lead & Maintainer',
		duration: 'Sep 2021 - Present',
		description: [
			'Led the Open Source Society of the ACM Student Chapter, making significant contributions to the development and evolution of the PEC ACM CSS Open Source Repository, leading to a 30% increase in repository activity.',
			'Demonstrated strong collaboration and leadership skills by reviewing and merging 78 pull requests, as well as creating 45, providing valuable guidance and support to contributors, resulting in an enhanced product and a more efficient development process.',
			'Acted as a mentor for multiple teams during the ideathon conducted by ACM, providing insights and guidance that contributed to a high‐performing, collaborative learning environment.',
		],
		about: 'PEC ACM is the official student chapter of the Association for Computing Machinery (ACM) at our college. As an ACM chapter, our responsibilities include organizing technical workshops, hosting coding competitions, conducting guest lectures, and fostering a community of passionate computer science enthusiasts.\n\nOur team works tirelessly to promote and enhance coding skills among students through various initiatives and events. Additionally, we collaborate with different companies on specific projects, bridging the gap between academia and industry.',
		url: '/work/pecacm',
		companyUrl: 'https://www.pecacm.com/',
		imageUrl: ACM,
	},
	{
		workplace: 'XEAM Ventures',
		position: 'Web Developer',
		duration: 'Jan 2023 - May 2023',
		description: [
			'Led the development of a React Native food delivery app using Redux Toolkit and Firebase, increasing the client’s order volume by 25%.',
			'Utilized TypeScript to enhance code reliability and maintainability for the app, contributing to a 15% decrease in debugging time.',
			'Leveraged Next.js and TailwindCSS to create a highly responsive company website, incorporating Progressive Web Application techniques for prefetching, which resulted in a 40% improvement in loading time.',
		],
		about: 'XEAM Ventures Private Limited (XEAM) is one of India’s leading company in Human Resource Management Services, IT Infrastructure management & IT-enabled services, Turnkey Project management, IT / Software solutions, and Skilling. XEAM is a story about entrepreneurship, passion, dedication & teamwork, founded in the year 2002 with a vision of becoming a facilitator for big businesses & Government organizations in the area of turnkey project management in IT / ITeS. We are an ISO 9001 & a CMMI level 3 company for providing HR and IT/ ITeS Project management services.\n\n We offer Professional Staffing Services for US and Business support, marketing survey & business lead generation services to some UK-based clients.We have excellent support infrastructure and an efficient service delivery network all across India headquartered at Mohali, Chandigarh and Branch offices & Project offices at 50+ locations in 22 States & UT of India and an International office in California, USA.',
		url: '/work/xeam-ventures',
		companyUrl: 'https://www.xeamventures.com/',
		imageUrl: XEAM,
	},
	{
		workplace: 'Foxmula',
		position: 'Backend Developer',
		duration: 'Aug 2022 - Nov 2022',
		description: [
			'Led a successful migration of EJS to React files,resulting in a 30% reduction in server costs, enhancing system performance and scalability.',
			'Proficiently developed, deployed, and maintained 15+ RESTAPIs, enhancing user experience by 40% and streamlining service.',
			'Implemented Cashfree and Razorpay, increasing transaction success rate by 20% and boosting customer satisfaction scores by 30%.',
			'Managed 10+ databases with MVC architecture, ensuring data accuracy and security, boosting system efficiency and reliability by 25%.',
		],
		about: 'Foxmula is an ed-tech platform that strives to empower students and young professionals with job-ready skills. We provide industry-oriented training and global certifications in collaboration with leading industry experts and organisations. Our aim is to empower students and get them ready for the job market to put them on a path to success.',
		url: '/work/foxmula',
		companyUrl: 'https://foxmula.com/',
		imageUrl: Foxmula,
	},
	{
		workplace: 'Padhakku',
		position: 'MERN Stack Web Developer',
		duration: 'Sep 2021 - Nov 2021',
		description: [
			'Spearheaded the creation of a new company website using React, incorporating SEO best practices, which boosted organic web traffic by 35%.',
			'Implemented a mobile‐first strategy, creating a responsive website, boosting mobile user retention by 45% and enhancing user experience.',
			'Enhanced website performance by implementing advanced React techniques, resulting in a 30% reduction in website loading time.',
		],
		about: 'Mployee.Me is a pioneering company dedicated to empowering job seekers in their quest to secure the best jobs by overcoming the challenges posed by Applicant Tracking Systems (ATS). With our cutting-edge ResuScan Software, we provide a comprehensive solution to optimize your resume and increase your chances of success. Our innovative technology allows you to obtain your ATS Resume Score, enabling you to gauge the effectiveness of your resume. Not only that, but our software identifies any mistakes or areas for improvement based on ATS requirements.\nAdditionally, we offer valuable insights into the right resume keywords that align with specific job descriptions, ensuring your application stands out to employers. These efforts can definitely help a job seeker to secure the right career in 20+ industries. At Mployee.Me, we are committed to equipping job seekers with the tools and knowledge to excel in their career aspirations.\n\nConsider us your best buddies!',
		url: '/work/padhakku',
		companyUrl: 'https://padhakku.com/',
		imageUrl: Padhakku,
	},
	{
		workplace: 'IndianStreetBets',
		position: 'Full Stack Web Developer',
		duration: 'Apr 2021 - Aug 2021',
		description: [
			'Led the development of the Option Strategy Builder tool utilizing AngularJS and Flask, improving client trading efficiency.',
			'Implemented asynchronous calls using Ajax and Google Sheets API, decreasing data fetching time by 82%, boosting real‐time data processing.',
			'Devised & implemented data rendering strategies, leading to a 30% increase in monthly user engagement and improved overall user experience.',
		],
		about: "India's fastest growing trading community! Discord. Reddit. YouTube. X. Instagram.",
		url: '/work/indianstreetbets',
		companyUrl: 'https://www.reddit.com/r/IndianStreetBets/',
		imageUrl: ISB,
	},
];

export default workData;
