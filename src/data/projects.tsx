/* eslint-disable quotes */
import Angular from '@/assets/icons/angular-icon-1.svg';
import Arduino from '@/assets/icons/arduino.svg';
import CSS from '@/assets/icons/css3.svg';
import Firebase from '@/assets/icons/firebase.svg';
import Flask from '@/assets/icons/flask.svg';
import HTML from '@/assets/icons/html.svg';
import Ionic from '@/assets/icons/ionicframework-icon.svg';
import Javascript from '@/assets/icons/javascript.svg';
import MUI from '@/assets/icons/material-ui-1.svg';
import MongoDB from '@/assets/icons/mongodb.svg';
import MySQL from '@/assets/icons/mysql-official.svg';
import NextJS from '@/assets/icons/nextdotjs.svg';
import NodeJS from '@/assets/icons/nodejs.svg';
import ReactNative from '@/assets/icons/react-native-1.svg';
import ReactJS from '@/assets/icons/reactjs.svg';
import SocketIO from '@/assets/icons/socket-io.svg';
import TailwindCSS from '@/assets/icons/tailwindcss.svg';
import Typescript from '@/assets/icons/typescript.svg';
import GVDS from '@/assets/projects/gvds.png';
import KeeperApp from '@/assets/projects/keeper-app.png';
import Portfolio from '@/assets/projects/portfolio.png';
import SERSystem from '@/assets/projects/ser-system.png';
import StockWatchlist from '@/assets/projects/stock-watchlist.png';
import StrokeNet from '@/assets/projects/strokenet.png';
import TicTacToe from '@/assets/projects/tic-tac-toe.png';
import ToDoList from '@/assets/projects/to-do-list.png';
import WeatherApp from '@/assets/projects/weather-app.png';
import Weave from '@/assets/projects/weave.png';
import { ProjectType } from '@/types';

const projects: ProjectType[] = [
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
	{
		name: 'Keeper App',
		duration: 'Jun 2021 - Jul 2021',
		description: [
			'A note-taking app built with React and Material-UI, providing CRUD operations for managing your notes.',
			'Users can create, read, update, and delete any note as per their choice, with a user-friendly interface and seamless experience.',
		],
		imageUrl: KeeperApp,
		links: [
			{
				label: 'Website',
				url: 'https://rahul5430.github.io/keeper-app/',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/keeper-app',
			},
		],
		technologies: [
			{ label: 'ReactJS', icon: ReactJS }, // Replace with the actual React icon import or path
			{ label: 'Material-UI', icon: MUI }, // Replace with the actual Material-UI icon import or path
		],
	},
	{
		name: 'To Do List',
		duration: 'Feb 2021 - Mar 2021',
		description: [
			'A full-stack to-do list application built with Express and Node.js, offering CRUD operations for managing your tasks.',
			'MongoDB is used as the database for proper storage of todos, allowing users to create, read, update, and delete any todo as per their choice.',
		],
		imageUrl: ToDoList,
		links: [
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/to-do-list',
			},
		],
		technologies: [
			{ label: 'NodeJS', icon: NodeJS },
			{ label: 'MongoDB', icon: MongoDB },
		],
	},
	{
		name: 'Weather App',
		duration: 'Nov 2020 - Dec 2020',
		description: [
			'This Weather App provides local and international weather forecasts using Express, Node.js, and the OpenWeatherMap API.',
			'Featuring up-to-the-minute weather reports, users can stay informed about current weather conditions and forecasts.',
		],
		imageUrl: WeatherApp,
		links: [
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/weather-app',
			},
		],
		technologies: [{ label: 'NodeJS', icon: NodeJS }],
	},
	{
		name: 'Tic-Tac-Toe',
		duration: 'Jul 2020 - Aug 2020',
		description: [
			'The Tic-Tac-Toe game is built using HTML, CSS, and JavaScript, providing users with an interactive gaming experience.',
			'Players can choose to play against the computer or engage in a 1v1 match against each other, offering both single-player and multiplayer modes.',
			'The game interface is completely responsive, ensuring seamless gameplay across various devices and screen sizes.',
		],
		imageUrl: TicTacToe,
		links: [
			{
				label: 'Website',
				url: 'https://rahul5430.github.io/Tic-Tac-Toe/',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/Rahul5430/Tic-Tac-Toe',
			},
		],
		technologies: [
			{ label: 'HTML', icon: HTML },
			{ label: 'CSS', icon: CSS },
			{ label: 'Javascript', icon: Javascript },
		],
	},
];

export default projects;
