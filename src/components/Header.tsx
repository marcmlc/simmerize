import 'server-only';

import Image from 'next/image';
import Link from 'next-intl/link';

import { css } from '@styles/css';
import { flex, hstack } from '@styles/patterns';

import icon from '../app/icon.svg';

export function Header() {
  return (
    <div className={css({ height: 20 })}>
      <div
        className={css({
          height: 20,
          position: 'fixed',
          zIndex: 50,
          insetInline: 0,
          insetBlockStart: 0,
          backgroundColor: 'white',
        })}>
        <div
          className={flex({
            height: 'full',
            width: '90%',
            maxWidth: '8xl',
            marginInline: 'auto',
            borderBottom: '2px solid token(colors.main.500)',
          })}>
          <Link href="/" className={hstack({ gap: 6 })}>
            <Image src={icon} alt="simmerize icon" width={50} />
            <span
              className={css({
                fontWeight: 700,
                fontSize: '3xl',
              })}>
              Simmerize
            </span>
          </Link>
        </div>
      </div>
      <div className={css({ height: 20 })} />
    </div>
  );
}
