import Angular from '@/assets/icons/angular-icon-1.svg';
import Firebase from '@/assets/icons/firebase.svg';
import Flask from '@/assets/icons/flask.svg';
import Javascript from '@/assets/icons/javascript.svg';
import MongoDB from '@/assets/icons/mongodb.svg';
import NextJS from '@/assets/icons/nextdotjs.svg';
import NodeJS from '@/assets/icons/nodejs.svg';
import Python from '@/assets/icons/python-5.svg';
import ReactNative from '@/assets/icons/react-native-1.svg';
import ReactJS from '@/assets/icons/reactjs.svg';
import Redux from '@/assets/icons/redux.svg';
import SocketIO from '@/assets/icons/socket-io.svg';
import ACM from '@/assets/logos/acm_background.png';
import Foxmula from '@/assets/logos/foxmula_background.png';
import GamiLearn from '@/assets/logos/gamilearn_background.png';
import ISB from '@/assets/logos/indianstreetbets_background.png';
import LeadGPT from '@/assets/logos/leadgpt_background.png';
import Padhakku from '@/assets/logos/padhakku_background.png';
import QWriter from '@/assets/logos/qwriter_background.png';
import StockBets from '@/assets/logos/stockbets_background.png';
import XEAM from '@/assets/logos/xeam_background.png';
import { WorkType } from '@/types';

const internshipsData: WorkType[] = [
	{
		workplace: 'XEAM Ventures',
		position: 'Web Developer',
		duration: 'Jan 2023 - May 2023',
		description: [
			'Developed a React Native food delivery app, boosting order volume by 25% and decreasing debugging time by 15%.',
			'Created a responsive company website using Next.js and TailwindCSS, improving loading time by 40%.',
		],
		about: 'XEAM Ventures specializes in Human Resource Management Services, IT Infrastructure management, and turnkey project management in IT/ITeS. We support businesses and government organizations across India and internationally.',
		imageUrl: XEAM,
		links: [{ label: 'Website', url: 'https://www.xeamventures.com/' }],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'React Native', icon: ReactNative },
		],
	},
	{
		workplace: 'Foxmula',
		position: 'Backend Developer',
		duration: 'Aug 2022 - Nov 2022',
		description: [
			'Migrated EJS to React, reducing server costs by 30% and enhancing system performance.',
			'Developed 15+ REST APIs, improving user experience by 40% and increasing transaction success rate by 20%.',
		],
		about: 'Foxmula is an ed-tech platform offering industry-oriented training and global certifications to equip students and young professionals with job-ready skills.',
		imageUrl: Foxmula,
		links: [{ label: 'Website', url: 'https://foxmula.com/' }],
		technologies: [
			{
				label: 'ReactJS',
				icon: ReactJS,
			},
			{
				label: 'NodeJS',
				icon: NodeJS,
			},
			{
				label: 'MongoDB',
				icon: MongoDB,
			},
		],
	},
	{
		workplace: 'Padhakku',
		position: 'MERN Stack Web Developer',
		duration: 'Sep 2021 - Nov 2021',
		description: [
			'Developed a new company website, increasing organic traffic by 35% and improving mobile user retention by 45%.',
			'Implemented advanced React techniques, reducing loading time by 30%.',
		],
		about: 'Mployee.Me helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) with ResuScan Software, providing ATS Resume Scores and keyword insights to improve job application success.',
		imageUrl: Padhakku,
		links: [{ label: 'Website', url: 'https://padhakku.com/' }],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'Javascript', icon: Javascript },
		],
	},
	{
		workplace: 'IndianStreetBets',
		position: 'Full Stack Web Developer',
		duration: 'Apr 2021 - Aug 2021',
		description: [
			'Developed the Option Strategy Builder tool with AngularJS and Flask, enhancing client trading efficiency.',
			'Implemented data rendering strategies, increasing user engagement by 30%.',
		],
		// eslint-disable-next-line quotes
		about: "India's fastest growing trading community on Discord, Reddit, YouTube, and other platforms.",
		imageUrl: ISB,
		links: [
			{
				label: 'Website',
				url: 'https://www.reddit.com/r/IndianStreetBets/',
			},
		],
		technologies: [
			{ label: 'AngularJS', icon: Angular },
			{ label: 'Flask', icon: Flask, customBg: 'bg-gray-100' },
		],
	},
];

const freelancingData: WorkType[] = [
	{
		workplace: 'QWriter',
		position: 'Freelancer Full-Stack Developer',
		duration: 'Apr 2024 - May 2024',
		description: [
			'Recreated a ReactJS website using Next.js, significantly improving speed and performance.',
			'Implemented AI-powered features allowing users to chat with OpenAI and ChatGPT to construct stories, receive outlines, vocabulary suggestions, and grammar feedback.',
		],
		about: 'QWriter is a cutting-edge platform that empowers users to create stories on any topic with the help of AI. Our advanced tools, including chat functionalities with OpenAI and ChatGPT, provide users with outlines, vocabulary enhancements, and grammar feedback to ensure their stories are compelling and well-crafted.',
		imageUrl: QWriter,
		links: [{ label: 'Website', url: 'https://qwriter.vercel.app/' }],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'Redux', icon: Redux },
		],
	},
	{
		workplace: 'GamiLearn',
		position: 'Freelancer Full-Stack Developer',
		duration: 'Mar 2024 - Apr 2024',
		description: [
			'Engineered an interactive gaming website using Next.js and Node.js, enabling users to play against a bot or in 1v1 multiplayer games.',
			'Utilized Socket.io for real-time communication and integrated OpenAI API to dynamically generate English grammar questions, enhancing user engagement and learning outcomes.',
		],
		about: 'Gamilearn is an innovative edtech startup that combines gaming with learning to make education fun and engaging. Our platform allows users to play educational games focused on school-level English grammar, fostering a competitive and interactive learning environment.',
		imageUrl: GamiLearn,
		links: [{ label: 'Website', url: 'https://gami-learn.com/' }],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'NodeJS', icon: NodeJS },
			{ label: 'SocketIO', icon: SocketIO },
		],
	},
	{
		workplace: 'LeadGPT',
		position: 'Freelancer Backend Developer',
		duration: 'Apr 2024 - May 2024',
		description: [
			'Reconstructed the backend using MVC architecture, significantly reducing API response times and improving system scalability.',
			'Created and optimized prompts for the OpenAI API, enhancing both system efficiency and user experience with more accurate responses.',
		],
		// eslint-disable-next-line quotes
		about: "Unlock your business's full potential with Lead GPT's advanced analytics and bespoke solutions. Our tools are designed to adapt and scale with your evolving needs, ensuring you stay ahead in a competitive landscape.",
		imageUrl: LeadGPT,
		links: [{ label: 'Website', url: 'https://leadgpt.org/' }],
		technologies: [
			{ label: 'NodeJS', icon: NodeJS },
			{ label: 'Firebase', icon: Firebase },
		],
	},
	{
		workplace: 'StockBets',
		position: 'CTO',
		duration: 'Sep 2023 - Present',
		description: [
			'Collaborated with clients to deliver tailored software solutions and worked with cross-functional teams to ensure seamless development.',
			'Maintained the codebase for mobile and web applications, ensuring functionality across multiple platforms.',
		],
		about: 'Founded in 2023, StockBets revolutionizes stock trading with AI-driven and blockchain-based technology, providing real-time market insights, predictive analytics, and personalized recommendations. Our community fosters growth and knowledge exchange among traders of all levels.',
		imageUrl: StockBets,
		links: [{ label: 'Website', url: 'https://stockbets.in/' }],
		technologies: [
			{ label: 'React Native', icon: ReactNative },
			{ label: 'ReactJS', icon: ReactJS },
			{ label: 'NodeJS', icon: NodeJS },
			{ label: 'SocketIO', icon: SocketIO },
			{ label: 'Python', icon: Python },
		],
	},
];

const openSourceData: WorkType[] = [
	{
		workplace: 'PEC ACM',
		position: 'Open Source Lead & Maintainer',
		duration: 'Sep 2021 - Present',
		description: [
			'Increased repository activity by 30% and managed 78 pull requests, creating 45.',
			'Mentored teams during ideathons, fostering a high-performing collaborative environment.',
		],
		about: 'PEC ACM promotes coding skills through workshops, competitions, guest lectures, and collaborations with companies, bridging the gap between academia and industry.',
		imageUrl: ACM,
		links: [
			{ label: 'Website', url: 'https://www.pecacm.com/' },
			{ label: 'GitHub', url: 'https://github.com/PEC-CSS/' },
		],
		technologies: [
			{ label: 'React Native', icon: ReactNative },
			{ label: 'NextJS', icon: NextJS },
			{ label: 'ReactJS', icon: ReactJS },
			{ label: 'NodeJS', icon: NodeJS },
		],
	},
];

export { freelancingData, internshipsData, openSourceData };
