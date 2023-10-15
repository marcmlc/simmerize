import 'server-only';

import { grid, gridItem } from '@styles/patterns';

import { RecipeDirections } from './RecipeDirections';
import { RecipeImage } from './RecipeImage';
import { RecipeIngredients } from './RecipeIngredients';
import { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
};

export function Recipe({ recipe }: Props) {
  return (
    <div
      className={grid({
        columns: 12,
        rowGap: { base: 8, lg: 12 },
        columnGap: { base: 0, lg: 20 },
      })}
    >
      <div
        className={gridItem({
          colSpan: { base: 12 },
        })}
      >
        <RecipeImage image={recipe.image} slug={recipe.slug} />
      </div>
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 5 },
        })}
      >
        <RecipeIngredients ingredients={recipe.ingredients} />
      </div>
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 7 },
        })}
      >
        <RecipeDirections directions={recipe.directions} />
      </div>
    </div>
  );
}
