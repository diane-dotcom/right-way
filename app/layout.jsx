import './globals.css';

export const metadata = {
  title: 'RightWay Lawn & Pest Control',
  description: 'Northeast Florida lawn and pest control services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
