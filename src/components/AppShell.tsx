import 'server-only';

import { ReactNode } from 'react';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <>
      <Header />
      <div
        className={flex({
          flexDirection: 'column',
          marginX: 'auto',
          maxWidth: '8xl',
          width: '90%',
          height: 'calc(100vh - 5rem)',
        })}>
        <div className={css({ flex: '1 1 auto', paddingBlock: 12 })}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
