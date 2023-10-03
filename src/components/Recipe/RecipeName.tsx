import 'server-only';

import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { Badge } from '../Badge';
import { Tag } from '@/types';

type Props = {
  name: string;
  tags: Tag[];
};

export function RecipeName({ name, tags }: Props) {
  const t = useTranslations('Recipe.Tag');

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
          <Badge key={index}>{t(tag)}</Badge>
        ))}
      </div>
    </>
  );
}
