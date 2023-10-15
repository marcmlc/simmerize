import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { css } from '@styles/css';
import { hstack, vstack } from '@styles/patterns';

export function LocaleSwitch() {
  const t = useTranslations('Languages');

  return (
    <div className={vstack({ fontSize: 'sm', alignItems: 'flex-start' })}>
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
