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
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        marginX: 'auto',
        maxWidth: '8xl',
        width: '90%',
        height: '100vh',
      })}>
      <Header />
      <div
        className={css({
          width: 'full',
          height: 'full',
        })}>
        <div className={css({ paddingBlock: 8, minHeight: 'calc(100vh - 8rem)' })}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
