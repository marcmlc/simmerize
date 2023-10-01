import { IconBaguette } from '@tabler/icons-react';

import { css } from '@styles/css';
import { hstack, vstack } from '@styles/patterns';

import { Icon } from '@/components/Icon';
import { Ingredient } from '@/types';

type Props = {
  ingredients: Ingredient[];
};

export function Ingredients({ ingredients }: Props) {
  return (
    <div className={vstack({ alignItems: 'stretch', gap: '7' })}>
      <h2 className={css({ fontSize: '3xl', fontWeight: 600 })}>Ingrédients</h2>
      <div className={vstack({ alignItems: 'stretch', gap: '6' })}>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index}>{ingredient}</Ingredient>
        ))}
      </div>
    </div>
  );
}

function Ingredient({ children }: { children: React.ReactNode }) {
  return (
    <div className={hstack({ gap: '8' })}>
      <Icon>
        <IconBaguette />
      </Icon>
      <p className={css({ fontSize: 'md' })}>{children}</p>
    </div>
  );
}
