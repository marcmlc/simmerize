import 'server-only';

import { css } from '@styles/css';

import { RecipeTags } from './RecipeTags';
import { Tag } from '@/types';

type Props = {
  name: string;
  tags: Tag[];
};

export function RecipeName({ name, tags }: Props) {
  return (
    <div>
      <h1
        className={css({
          fontSize: { base: '4xl', md: '6xl' },
          fontWeight: 700,
          lineHeight: 1.35,
        })}>
        {name}
      </h1>
      <RecipeTags tags={tags} />
    </div>
  );
}
