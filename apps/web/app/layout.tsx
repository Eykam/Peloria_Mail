import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { TopLoader } from '@/components/top-loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Peloria - Email Editor',
  description:
    'Powerful email editor that ensures impeccable communication across all major clients.',
  // icons: {
    
  // },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>
        <TopLoader />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
