import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const googleSans = localFont({
  src: [
    {
      path: '../fonts/GoogleSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GoogleSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GoogleSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-google-sans',
});

export const googleSansText = localFont({
  src: [
    {
      path: '../fonts/GoogleSansText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GoogleSansText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-google-sans-text',
});
