import 'server-only';

import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { hstack } from '@styles/patterns';

import { LocaleSwitch } from './LocaleSwitch';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      className={hstack({
        width: '100%',
        height: 20,
        borderTop: '2px solid token(colors.main.500)',
        justifyContent: 'space-between',
      })}>
      <LocaleSwitch />
      <p
        className={css({
          fontSize: 'sm',
          color: 'gray.500',
        })}>
        {t('copyrights')}
      </p>
    </footer>
  );
}
