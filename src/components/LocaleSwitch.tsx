import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { css } from '@styles/css';
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
        <Link href="/" locale="fr" className={css()}>
          <span>{t('fr')}</span>
        </Link>
        <Link href="/" locale="en" className={css()}>
          <span>{t('en')}</span>
        </Link>
      </div>
    </div>
  );
}
