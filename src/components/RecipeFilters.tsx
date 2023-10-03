import 'server-only';

import { useTranslations } from 'next-intl';

import { flex } from '@styles/patterns';

import { RecipeTagLink } from './RecipeTagLink';
import { TAGS_VALUES } from '@/types';

export function RecipeFilters({ children }: { children: React.ReactNode }) {
  const t = useTranslations('Recipe.Tag');

  return (
    <div
      className={flex({
        rowGap: 8,
        flexDirection: 'column',
      })}>
      <div
        className={flex({
          width: 'full',
          columnGap: 3,
          rowGap: 2,
          paddingBlock: '2.5',
          justifyContent: 'center',
          wrap: 'wrap',
        })}>
        <RecipeTagLink tag={t('all')} href="/recipes" />
        {TAGS_VALUES.map((tag, index) => (
          <RecipeTagLink key={index} tag={t(tag)} href={`/recipes/tags/${encodeURIComponent(tag)}`} />
        ))}
      </div>
      {children}
    </div>
  );
}
