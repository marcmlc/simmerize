import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en'] as const;
export const defaultLocale = 'fr' as const;

export const pathnames = {
  '/recipes': '/recipes',
};

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
});
