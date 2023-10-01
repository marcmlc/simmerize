import 'server-only';

import { vstack } from '@styles/patterns';

export function Footer() {
  return (
    <div
      className={vstack({
        width: '100%',
        height: 12,
        borderTop: '2px solid token(colors.main.500)',
        justifyContent: 'center',
        fontSize: 'sm',
        color: 'gray.500',
      })}>
      ©️ 2023 Simmerize. Tous droits réservés.
    </div>
  );
}
