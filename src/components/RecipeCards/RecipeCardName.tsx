import 'server-only';

import { css } from '@styles/css';
import { flex, vstack } from '@styles/patterns';

import { Badge } from '../Badge';
import { Tag } from '@/types';

type Props = {
  name: string;
  tags: Tag[];
};

export function RecipeCardName({ name, tags }: Props) {
  return (
    <div className={vstack({ alignItems: 'flex-start', gap: 2, paddingBlock: 4, paddingInline: 2 })}>
      <h1
        className={css({
          fontSize: 'xl',
        })}>
        {name}
      </h1>
      <div className={flex({ width: 'full', columnGap: 2 })}>
        {tags.map((tag, index) => (
          <Badge key={index} size="sm">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
