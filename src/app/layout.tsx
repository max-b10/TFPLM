import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import Footer from './components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TFPLM',
  description:
    'The FPL Manager - analyse your history and stats against other FPL managers',
  icons: {
    icon: '/fpl.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
