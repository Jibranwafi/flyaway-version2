import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display, Leckerli_One, Press_Start_2P, Handjet } from 'next/font/google';
import localFont from 'next/font/local';

// Google Fonts setup
const dmSans = DM_Sans({
subsets: ['latin'],
display: 'swap',
variable: '--font-dm-sans',
});

const dmSerifDisplay = DM_Serif_Display({
weight: '400',
subsets: ['latin'],
display: 'swap',
variable: '--font-dm-serif-display',
});

const leckerliOne = Leckerli_One({
weight: '400',
subsets: ['latin'],
display: 'swap',
variable: '--font-leckerli-one',
});

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p',
});

const handjet = Handjet({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-handjet',
});

// Local font setup
const dreamingOutland = localFont({
src: [
    {
    path: '../public/fonts/dreaming-outloud-regular.woff2',
    weight: '400',
    style: 'normal',
    },
    {
    path: '../public/fonts/dreaming-outloud-slanted.woff2',
    weight: '700',
    style: 'normal',
    },
],
variable: '--font-dreaming-outland',
display: 'swap',
});

// Add Boldoa as a local font
const boldoa = localFont({
src: '../public/fonts/boldoa.woff2',
variable: '--font-boldoa',
display: 'swap',
});

export const metadata: Metadata = {
title: 'Dashboard - Next.js App',
description: 'A simple Next.js dashboard with separate components',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable} ${dreamingOutland.variable} ${leckerliOne.variable} ${boldoa.variable} ${pressStart2P.variable} ${handjet.variable}`}>
    <body>
        {children}
    </body>
    </html>
);
}