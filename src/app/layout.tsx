import './globals.css';

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
			</body>
		</html>
	);
}
