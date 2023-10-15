import 'server-only';

import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { css } from '@styles/css';

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div
      className={css({
        position: 'relative',
        marginX: 'auto',
        maxWidth: '8xl',
        width: '90%',
      })}
    >
      <Header />
      <div className={css({ paddingBlock: 4, paddingInline: 2 })}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
