import 'server-only';

import { Inter } from 'next/font/google';
import { getTranslator, unstable_setRequestLocale } from 'next-intl/server';

import { AppShell } from '../../components/AppShell';
import { locales } from '@/navigation';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslator(locale, 'Metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
