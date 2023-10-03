import 'server-only';

import { useTranslations } from 'next-intl';

import { flex, grid } from '@styles/patterns';

import { RecipeCard as RecipeCardComponent } from './RecipeCard';
import { RecipeCard } from '@/types';

type Props = {
  recipes: RecipeCard[];
};

export function RecipeCards({ recipes }: Props) {
  const t = useTranslations('Recipes');

  if (!recipes?.length) {
    return <div className={flex({ justifyContent: 'center', fontStyle: 'italic' })}>{t('empty')}</div>;
  }

  return (
    <div className={grid({ columns: { smDown: 1, sm: 2, md: 3, lg: 4 }, columnGap: 6, rowGap: 6 })}>
      {recipes.map(recipe => (
        <RecipeCardComponent key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  );
}
