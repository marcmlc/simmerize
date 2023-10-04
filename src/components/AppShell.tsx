import 'server-only';

import { ReactNode } from 'react';

import { css } from '@styles/css';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div
      className={css({
        marginX: 'auto',
        maxWidth: '8xl',
        width: '90%',
      })}>
      <Header />
      <div className={css({ paddingBlock: 8, width: 'full', height: 'full' })}>{children}</div>
      <Footer />
    </div>
  );
}
