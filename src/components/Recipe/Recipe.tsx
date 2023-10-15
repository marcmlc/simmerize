import { grid, gridItem } from '@styles/patterns';

import { Ingredients } from './Ingredients';
import { Directions } from './Steps';
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
          colSpan: { base: 12, lg: 5 },
        })}
      >
        <Ingredients ingredients={recipe.ingredients} />
      </div>
      <div
        className={gridItem({
          colSpan: { base: 12, lg: 7 },
        })}
      >
        <Directions directions={recipe.directions} />
      </div>
    </div>
  );
}
