import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

import BG_BOTTOM from '@/assets/bg_bottom.webp';
import BG_TOP from '@/assets/bg_top.webp';
import Navbar from '@/components/elements/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Full-Stack Cross-Platform Developer | Rahul Sharma',
	description:
		'Welcome to the portfolio of Rahul Sharma, a full-stack cross-platform developer with expertise in Next.js, React, Node.js, and more. Explore my work, projects, and get in touch.',
	applicationName: 'Full-Stack Cross-Platform Developer | Rahul Sharma',
	authors: [{ name: 'Rahul Sharma' }],
	creator: 'Rahul Sharma',
	publisher: 'Rahul Sharma',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', sizes: '32x32' },
			{ url: '/favicon-16x16.png', sizes: '16x16' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	appleWebApp: {
		title: 'Full-Stack Cross-Platform Developer | Rahul Sharma',
		statusBarStyle: 'black',
		startupImage: [
			{
				media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png',
			},
			{
				media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png',
			},
			{
				media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
			},
			{
				media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
			},
			{
				media: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
			},
			{
				media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
			},
			{
				media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/iPhone_11__iPhone_XR_landscape.png',
			},
			{
				media: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
				url: 'splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
			},
			{
				media: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
			},
			{
				media: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
			},
			{
				media: 'screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/13__iPad_Pro_M4_landscape.png',
			},
			{
				media: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/12.9__iPad_Pro_landscape.png',
			},
			{
				media: 'screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/11__iPad_Pro_M4_landscape.png',
			},
			{
				media: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
			},
			{
				media: 'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/10.9__iPad_Air_landscape.png',
			},
			{
				media: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/10.5__iPad_Air_landscape.png',
			},
			{
				media: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/10.2__iPad_landscape.png',
			},
			{
				media: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
			},
			{
				media: 'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
				url: 'splash_screens/8.3__iPad_Mini_landscape.png',
			},
			{
				media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
			},
			{
				media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png',
			},
			{
				media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
			},
			{
				media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
			},
			{
				media: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
			},
			{
				media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
			},
			{
				media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/iPhone_11__iPhone_XR_portrait.png',
			},
			{
				media: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
				url: 'splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
			},
			{
				media: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
			},
			{
				media: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
			},
			{
				media: 'screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/13__iPad_Pro_M4_portrait.png',
			},
			{
				media: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/12.9__iPad_Pro_portrait.png',
			},
			{
				media: 'screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/11__iPad_Pro_M4_portrait.png',
			},
			{
				media: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
			},
			{
				media: 'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/10.9__iPad_Air_portrait.png',
			},
			{
				media: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/10.5__iPad_Air_portrait.png',
			},
			{
				media: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/10.2__iPad_portrait.png',
			},
			{
				media: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
			},
			{
				media: 'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
				url: 'splash_screens/8.3__iPad_Mini_portrait.png',
			},
		],
	},
	openGraph: {
		title: 'Full-Stack Cross-Platform Developer | Rahul Sharma',
		description:
			'Welcome to the portfolio of Rahul Sharma, a full-stack cross-platform developer with expertise in Next.js, React, Node.js, and more. Explore my work, projects, and get in touch.',
		url: 'https://rahulsharma.vercel.app/',
		siteName: 'Rahul Sharma - Full Stack Developer',
		type: 'website',
		images: [
			{
				url: 'https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png',
				width: 500,
				height: 500,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://rahulsharma.vercel.app/',
		title: 'Full-Stack Cross-Platform Developer | Rahul Sharma',
		description:
			'Welcome to the portfolio of Rahul Sharma, a full-stack cross-platform developer with expertise in Next.js, React, Node.js, and more. Explore my work, projects, and get in touch.',
		images: 'https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png',
		creator: '@RahulSharma5430',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	manifest: '/manifest.json',
	keywords:
		'developer, code, pec, 2024, Rahul, Sharma, VEATT, VLSI in Emerging Applications, Trends and Technology (VEATT) 2025, Empowering Innovation: Transformation in VLSI and Electronics, Home | Punjab Engineering College, (Deemed to be University), Chandigarh',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${inter.variable}`}>
			<body>
				<div className='body-container'>
					<div className='main-container'>
						<Navbar />
						{children}
						<Footer />
					</div>
					<div className='absolute -bottom-[100px] h-auto w-desktop max-w-desktop flex-none animate-fadeAnim'>
						<Image
							alt='Gradient Background'
							src={BG_BOTTOM}
							className='pointer-events-none h-full w-full select-none object-cover object-center'
						/>
					</div>
					<div className='pointer-events-none absolute top-0 z-0 h-[600px] w-desktop max-w-desktop flex-none animate-fadeAnim'>
						<Image
							alt='Gradient Background'
							src={BG_TOP}
							className='pointer-events-none h-full w-full select-none object-cover object-center'
							priority
						/>
					</div>
				</div>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
