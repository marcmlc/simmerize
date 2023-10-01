import { flex } from '@styles/patterns';

import { Badge } from '../Badge';
import { Tag } from '@/types';

type Props = {
  tags: Tag[];
};

export function RecipeTags({ tags }: Props) {
  return (
    <div className={flex({ width: 'full', columnGap: 5, paddingBlock: '2.5' })}>
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </div>
  );
}
