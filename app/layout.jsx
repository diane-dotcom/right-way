import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'RightWay Lawn & Pest Control',
  description: 'Northeast Florida lawn and pest control services.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
  <html lang="en">
    <GoogleTagManager gtmId="GTM-P9N4SVH8" />
    <body>{children}</body>
  </html>
  );
}
