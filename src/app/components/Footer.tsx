import 'server-only';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

export function Footer() {
  return (
    <div
      className={flex({
        width: 'full',
        paddingBlock: 4,
        borderTop: '2px solid token(colors.main.500)',
        justifyContent: 'center',
      })}
    >
      <p
        className={css({
          fontSize: 'sm',
          color: 'gray.500',
        })}
      >
        ©️ 2023 Simmerize. Tous droits réservés.
      </p>
    </div>
  );
}
