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
  return (
    <div className={vstack({ gap: 3, alignItems: 'flex-start', width: 'full' })}>
      <h3 className={css({ fontSize: 'lg' })}>Valeurs nutritionnelles par portion</h3>
      <div className={hstack({ gap: 5, overflowY: 'hidden', width: 'full' })}>
        <RecipeNutritionPill value={nutrition.calories} label="Calories" />
        <RecipeNutritionPill value={nutrition.fibres} label="Fibres" />
        <RecipeNutritionPill value={nutrition.proteines} label="Prot." />
        <RecipeNutritionPill value={nutrition.glucides} label="Gluc." />
        <RecipeNutritionPill value={nutrition.sucre} label="Sucre" />
        <RecipeNutritionPill value={nutrition.matieresGrasses} label="Mat. G." />
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
