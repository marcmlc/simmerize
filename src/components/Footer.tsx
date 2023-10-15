import 'server-only';

import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { LocaleSwitch } from './LocaleSwitch';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      className={flex({
        width: 'full',
        height: 32,
        paddingTop: 4,
        paddingBottom: 8,
        flexDirection: { base: 'column', md: 'row' },
        borderTop: '2px solid token(colors.main.500)',
        justifyContent: { base: 'space-around', md: 'space-between' },
        alignItems: 'center',
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
