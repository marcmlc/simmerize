import 'server-only';

import { css } from '@styles/css';
import { grid } from '@styles/patterns';

import { RecipeDirections } from './RecipeDirections';
import { RecipeImage } from './RecipeImage';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeMeta } from './RecipeMeta';
import { RecipeName } from './RecipeName';
import { RecipeNutrition } from './RecipeNutrition';
import { RecipeServings } from './RecipeServings';
import { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
};

export function Recipe({ recipe }: Props) {
  return (
    <div
      className={grid({
        columns: 12,
        rowGap: { base: 12, lg: 14 },
        columnGap: { base: 0, lg: 24 },
      })}>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '6 / 12' },
          gridRow: '1 / 2',
        })}>
        <RecipeName name={recipe.name} tags={recipe.tags} />
      </div>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '1 / 6' },
          gridRow: { base: '2 / 3', lg: '1 / auto' },
          lg: { position: 'relative' },
        })}>
        <RecipeImage image={recipe.image} slug={recipe.slug} />
      </div>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '6 / 12' },
          gridRow: { base: '3 / 4', lg: 'auto' },
        })}>
        <RecipeMeta cookingTime={recipe.cookingTime} preparationTime={recipe.preparationTime} />
      </div>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '6 / 12' },
          gridRow: { base: '4 / 5', lg: 'auto' },
        })}>
        <RecipeServings servings={recipe.servings} />
      </div>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '6 / 12' },
          gridRow: { base: '5 / 6', lg: 'auto' },
        })}>
        <RecipeNutrition nutrition={recipe.nutrition} />
      </div>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '1 / 6' },
          gridRow: { base: '6 / 7', lg: '1 / 8' },
          lg: { position: 'relative' },
        })}>
        <RecipeIngredients ingredients={recipe.ingredients} />
      </div>
      <div
        className={css({
          gridColumn: { base: '1 / 13', lg: '6 / 12' },
          gridRow: { base: '7 / 8', lg: 'auto' },
        })}>
        <RecipeDirections directions={recipe.directions} />
        <div className={css({ height: '450px' })} />
      </div>
    </div>
  );
}
