import 'server-only';

import { IconChefHat } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { hstack, vstack } from '@styles/patterns';

import { Icon } from '@/components/Icon';
import { Ingredient } from '@/types';

type Props = {
  ingredients: Ingredient[];
};

export function RecipeIngredients({ ingredients }: Props) {
  const t = useTranslations('Recipe');

  return (
    <div
      className={vstack({
        alignItems: 'stretch',
        gap: '4',
        lg: {
          marginTop: 'calc(125% + token(sizes.14))',
          position: 'sticky',
          top: 32,
        },
      })}>
      <h2 className={css({ fontSize: '3xl', fontWeight: 600, textTransform: 'capitalize' })}>{t('ingredients')}</h2>
      <div className={vstack({ alignItems: 'stretch', gap: '5' })}>
        {ingredients.map((ingredient, index) => (
          <RecipeIngredient key={index}>{ingredient}</RecipeIngredient>
        ))}
      </div>
    </div>
  );
}

function RecipeIngredient({ children }: { children: React.ReactNode }) {
  return (
    <div className={hstack({ gap: '8' })}>
      <Icon>
        <IconChefHat width={24} />
      </Icon>
      <p className={css({ fontSize: 'md' })}>{children}</p>
    </div>
  );
}
