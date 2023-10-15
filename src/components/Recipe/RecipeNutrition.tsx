import 'server-only';

import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { circle, hstack, vstack } from '@styles/patterns';

type Props = {
  nutrition?: {
    calories?: string;
    fibres?: string;
    proteines?: string;
    glucides?: string;
    sucre?: string;
    matieresGrasses?: string;
  };
};

export function RecipeNutrition({ nutrition = {} }: Props) {
  const t = useTranslations('Recipe.Nutrition');

  return (
    <div className={vstack({ gap: 3, alignItems: 'flex-start', width: 'full' })}>
      <h3 className={css({ fontSize: 'lg' })}>{t('title')}</h3>
      <div className={hstack({ gap: 5, overflowY: 'hidden', width: 'full' })}>
        <RecipeNutritionPill value={nutrition.calories} label={t('calories')} />
        <RecipeNutritionPill value={nutrition.fibres} label={t('fiber')} />
        <RecipeNutritionPill value={nutrition.proteines} label={t('protein')} />
        <RecipeNutritionPill value={nutrition.glucides} label={t('carbs')} />
        <RecipeNutritionPill value={nutrition.sucre} label={t('sugar')} />
        <RecipeNutritionPill value={nutrition.matieresGrasses} label={t('fats')} />
      </div>
    </div>
  );
}

function RecipeNutritionPill({ value, label }: { value?: string; label: string }) {
  const valueLabel = value ?? '--';

  return (
    <div className={css({ backgroundColor: 'main.50', borderRadius: '4rem', padding: 2 })}>
      <div className={circle({ backgroundColor: 'white', size: 16, fontSize: 'lg' })}>{valueLabel}</div>
      <div
        className={css({
          paddingTop: 3,
          paddingBottom: 4,
          textAlign: 'center',
          color: 'main.500',
          fontWeight: 500,
          fontSize: 'sm',
        })}>
        {label}
      </div>
    </div>
  );
}
