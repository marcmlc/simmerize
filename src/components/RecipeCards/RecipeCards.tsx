import 'server-only';

import { grid } from '@styles/patterns';

import { RecipeCard as RecipeCardComponent } from './RecipeCard';
import { RecipeCard } from '@/types';

type Props = {
  recipes: RecipeCard[];
};

export function RecipeCards({ recipes }: Props) {
  return (
    <div className={grid({ columns: { smDown: 1, sm: 2, md: 3, lg: 4 }, columnGap: 6, rowGap: 6 })}>
      {recipes.map(recipe => (
        <RecipeCardComponent key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  );
}
