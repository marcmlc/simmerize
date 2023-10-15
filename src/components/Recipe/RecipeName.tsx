import 'server-only';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { Badge } from '../Badge';
import { Tag } from '@/types';

type Props = {
  name: string;
  tags: Tag[];
};

export function RecipeName({ name, tags }: Props) {
  return (
    <>
      <h1
        className={css({
          fontSize: { base: '4xl', md: '6xl' },
          fontWeight: 700,
          lineHeight: 1.35,
        })}>
        {name}
      </h1>
      <div className={flex({ width: 'full', columnGap: 5, paddingBlock: '2.5' })}>
        {tags.map((tag, index) => (
          <Badge key={index}>{tag}</Badge>
        ))}
      </div>
    </>
  );
}
