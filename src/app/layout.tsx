import 'server-only';

import './globals.css';
import { Inter } from 'next/font/google';

import { AppShell } from '../components/AppShell';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simmerize',
  description: 'A collection of delicious recipes!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
