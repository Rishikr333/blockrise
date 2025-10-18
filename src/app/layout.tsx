import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockrise',
  description: 'Doing real estate the real way',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
