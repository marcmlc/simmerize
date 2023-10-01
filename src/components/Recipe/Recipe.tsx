import 'server-only';

import { grid, gridItem } from '@styles/patterns';

import { RecipeDirections } from './RecipeDirections';
import { RecipeImage } from './RecipeImage';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeName } from './RecipeName';
import { RecipeTags } from './RecipeTags';
import { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
};

export function Recipe({ recipe }: Props) {
  return (
    <div
      className={grid({
        columns: 12,
        rowGap: { base: 6, lg: 12 },
        columnGap: { base: 0, lg: 20 },
      })}
    >
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 7 },
          order: { lg: 2 },
        })}
      >
        <RecipeName name={recipe.name} />
        <RecipeTags tags={recipe.tags} />
      </div>
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 5 },
          order: { lg: 1 },
        })}
      >
        <RecipeImage image={recipe.image} slug={recipe.slug} />
      </div>
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 5 },
          order: { lg: 3 },
        })}
      >
        <RecipeIngredients ingredients={recipe.ingredients} />
      </div>
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 7 },
          order: { lg: 4 },
        })}
      >
        <RecipeDirections directions={recipe.directions} />
      </div>
    </div>
  );
}
