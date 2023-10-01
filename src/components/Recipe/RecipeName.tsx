import 'server-only';

import { css } from '@styles/css';

type Props = {
  name: string;
};

export function RecipeName({ name }: Props) {
  return (
    <h1
      className={css({
        textTransform: 'capitalize',
        fontSize: { base: '4xl', md: '6xl' },
        fontWeight: 700,
        lineHeight: 1.15,
      })}>
      {name}
    </h1>
  );
}
