import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { css, cva } from '@styles/css';
import { flex, hstack } from '@styles/patterns';

export function LocaleSwitch() {
  const t = useTranslations('Footer.Languages');

  return (
    <div
      className={flex({
        fontSize: 'sm',
        alignItems: 'flex-start',
        flexDirection: { base: 'row', md: 'column' },
        gap: 2,
        flexWrap: 'wrap',
      })}>
      <p className={css({ fontWeight: 600 })}>🌍 {t('action')}</p>
      <div className={hstack()}>
        <LocaleLink locale="fr" />
        <LocaleLink locale="en" />
      </div>
    </div>
  );
}

const localeLink = cva({
  variants: {
    selected: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
});

function LocaleLink({ locale }: { locale: string }) {
  const t = useTranslations('Footer.Languages');
  const selectedLocale = useLocale();

  return (
    <Link href="/" locale={locale} className={localeLink({ selected: selectedLocale === locale })}>
      <span>{t(locale)}</span>
    </Link>
  );
}
