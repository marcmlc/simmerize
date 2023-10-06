import 'server-only';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { LocaleSwitch } from './LocaleSwitch';
import { Resources } from './Resources';
import { SiteMap } from './SiteMap';

export function Footer() {
  return (
    <footer
      className={flex({
        width: 'full',
        flex: '0 1',
        paddingTop: 8,
        paddingBottom: 4,
        flexDirection: 'column',
        borderTop: '2px solid token(colors.main.500)',
        rowGap: 10,
      })}>
      <div
        className={flex({ flexDirection: { base: 'column', md: 'row' }, justifyContent: 'space-around', rowGap: 8 })}>
        <LocaleSwitch />
        <SiteMap />
        <Resources />
      </div>
      <p
        className={css({
          textAlign: 'center',
          width: 'full',
          fontSize: 'sm',
          color: 'gray.500',
        })}>
        ©️ 2023&nbsp;
        <a
          href="https://github.com/marcmlc"
          className={css({
            color: 'main.400',
            fontWeight: 500,
          })}>
          Marc Meillac
        </a>
      </p>
    </footer>
  );
}
