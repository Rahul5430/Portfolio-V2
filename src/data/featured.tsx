/* eslint-disable quotes */
import Angular from '@/assets/icons/angular-icon-1.svg';
import Arduino from '@/assets/icons/arduino.svg';
import Firebase from '@/assets/icons/firebase.svg';
import Flask from '@/assets/icons/flask.svg';
import Ionic from '@/assets/icons/ionicframework-icon.svg';
import MySQL from '@/assets/icons/mysql-official.svg';
import NextJS from '@/assets/icons/nextdotjs.svg';
import NodeJS from '@/assets/icons/nodejs.svg';
import Python from '@/assets/icons/python-5.svg';
import ReactNative from '@/assets/icons/react-native-1.svg';
import ReactJS from '@/assets/icons/reactjs.svg';
import Redux from '@/assets/icons/redux.svg';
import SocketIO from '@/assets/icons/socket-io.svg';
import TailwindCSS from '@/assets/icons/tailwindcss.svg';
import Typescript from '@/assets/icons/typescript.svg';
import ACM from '@/assets/logos/acm_background.png';
import GamiLearn from '@/assets/logos/gamilearn_background.png';
import LeadGPT from '@/assets/logos/leadgpt_background.png';
import QWriter from '@/assets/logos/qwriter_background.png';
import StockBets from '@/assets/logos/stockbets_background.png';
import XEAM from '@/assets/logos/xeam_background.png';
import GVDS from '@/assets/projects/gvds.png';
import Portfolio from '@/assets/projects/portfolio.png';
import SERSystem from '@/assets/projects/ser-system.png';
import StockWatchlist from '@/assets/projects/stock-watchlist.png';
import StrokeNet from '@/assets/projects/strokenet.png';
import Weave from '@/assets/projects/weave.png';
import { ProjectType, WorkType } from '@/types';

const featuredWork: WorkType[] = [
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
];

const featuredProjects: ProjectType[] = [
	{
		name: 'Portfolio Website',
		duration: 'Jul 2023 - Present',
		description: [
			'Created a personal portfolio website to showcase my projects, skills, and experience.',
			'Utilized Next.js, Tailwind CSS, and TypeScript to build a fast, scalable, and maintainable site.',
			'Designed a modern, responsive UI and implemented interactive features to enhance user engagement.',
		],
		imageUrl: Portfolio,
		links: [
			{ label: 'Website', url: 'https://rahulsharma.vercel.app' },
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/Portfolio-V2',
			},
		],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'TailwindCSS', icon: TailwindCSS },
			{ label: 'Typescript', icon: Typescript },
		],
	},
	{
		name: 'StrokeNet',
		duration: 'Oct 2023 - Present',
		description: [
			'Developed StrokeNet, a cross-platform application used by doctors at PGI Chandigarh to alert medical staff upon the arrival of stroke patients, enabling immediate response.',
			'Implemented a comprehensive system comprising a website, Android app, and iPhone app, providing access to patient records and facilitating quick action.',
			'Utilized Ionic, Angular, and TypeScript for frontend development, and Node.js with TypeScript for backend. Communication handled via Socket.IO, with Firebase used for stroke alert notifications.',
		],
		imageUrl: StrokeNet,
		links: [
			{
				label: 'Website',
				url: 'https://www.strokenetchandigarh.com/',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/StrokeNet_2.O/tree/main',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/StrokeNet_2.O_backend/tree/main',
			},
		],
		technologies: [
			{ label: 'Ionic', icon: Ionic },
			{ label: 'Angular', icon: Angular },
			{ label: 'Typescript', icon: Typescript },
			{ label: 'NodeJS', icon: NodeJS },
			{ label: 'SocketIO', icon: SocketIO },
			{ label: 'Firebase', icon: Firebase },
			{ label: 'MySQL', icon: MySQL },
		],
	},
	{
		name: 'Wireless Ground Vibration Detection System',
		duration: 'Oct 2023 - May 2024',
		description: [
			'Developed a groundbreaking system for real-time ground vibration detection accessible globally via a web interface.',
			'Implemented wireless transmission of vibration data, a pioneering feat in the field, using Arduino hardware.',
			'Utilized Next.js, Tailwind CSS, and TypeScript for frontend development, and Node.js with TypeScript for backend. Communication between frontend, backend, and hardware facilitated via Socket.IO.',
		],
		imageUrl: GVDS,
		links: [
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/Major-Project-Frontend',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/Major-Project-Backend',
			},
		],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'TailwindCSS', icon: TailwindCSS },
			{ label: 'Typescript', icon: Typescript },
			{ label: 'NodeJS', icon: NodeJS },
			{ label: 'SocketIO', icon: SocketIO },
			{ label: 'Arduino', icon: Arduino },
		],
	},
	{
		name: 'WEAVE 2025',
		duration: 'Feb 2024 - May 2024',
		description: [
			"WEAVE 2025 is a conference celebrating women's contributions to VLSI and electronics, fostering networking and knowledge exchange.",
			'Developed a dynamic conference website using Next.js and Tailwind CSS, ensuring a responsive and user-friendly interface.',
			'Implemented features to facilitate networking, showcase innovations, and enhance user engagement with interactive elements and optimized performance.',
		],
		imageUrl: Weave,
		links: [
			{ label: 'Website', url: 'https://pec-conference.vercel.app' },
			{ label: 'GitHub', url: 'https://github.com/Rahul5430/conference' },
		],
		technologies: [
			{ label: 'NextJS', icon: NextJS },
			{ label: 'TailwindCSS', icon: TailwindCSS },
			{ label: 'Typescript', icon: Typescript },
		],
	},
	{
		name: 'Speech Emotion Recognition System',
		duration: 'Oct 2022 - Dec 2022',
		description: [
			'The Speech Emotion Recognition System classifies various audio speech files into different emotions such as happy, sad, anger, and neutral, using machine learning algorithms.',
			'This system finds applications in diverse fields like the medical industry or customer call centers, enabling sentiment analysis and enhancing customer service quality.',
			'Built with React.js for the frontend, allowing users to upload audio files, and Flask for the backend. Additionally, an ML model has been trained to accurately classify emotions.',
		],
		imageUrl: SERSystem,
		links: [
			{
				label: 'Website',
				url: 'https://speech-emotion-recognition.netlify.app',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/Speech-Emotion-Recognition-System',
			},
		],
		technologies: [
			{ label: 'React', icon: ReactJS },
			{ label: 'Flask', icon: Flask, customBg: 'bg-gray-100' },
		],
	},
	{
		name: 'StockWatchlist',
		duration: 'Oct 2021 - Present',
		description: [
			'StockWatchlist is an ad-free open-source stock watchlist application for stocks (NSE & BSE), cryptocurrencies, options, and indexes, built with React Native.',
			'Users can easily search for indexes and add them to their watchlist, providing a convenient way to track their favorite stocks and investments.',
			'As the maintainer of the codebase, I oversee the development and maintenance of the application, ensuring its stability and functionality.',
		],
		imageUrl: StockWatchlist,
		links: [
			{
				label: 'Website',
				url: 'https://drive.google.com/file/d/1_zmsGgwEhXBAJoIsKQH5Z4XQKzbQBisn/view',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/Stock-Watchlist',
			},
		],
		technologies: [
			{ label: 'React Native', icon: ReactNative },
			{ label: 'Typescript', icon: Typescript },
		],
	},
];

export { featuredProjects, featuredWork };
