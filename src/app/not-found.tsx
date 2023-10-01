import 'server-only';

import { css } from '@styles/css';
import { vstack } from '@styles/patterns';

export default function NotFoundPage() {
  return (
    <div
      className={vstack({
        gap: 4,
        padding: 2,
        fontWeight: 900,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'main.500',
        // screen height - footer+header+contentPadding
        height: 'calc(100vh - 10rem)',
      })}>
      <p
        className={css({
          lineHeight: 1,
          color: 'main.100',
          fontSize: { base: '7rem', md: '13rem' },
        })}>
        404
      </p>
      <p
        className={css({
          color: 'white',
          fontSize: { base: '3xl', md: '4xl' },
        })}>
        Cette page n&apos;existe pas
      </p>
    </div>
  );
}
