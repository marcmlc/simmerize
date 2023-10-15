import 'server-only';

import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { hstack, vstack } from '@styles/patterns';

import { Icon } from '@/components/Icon';
import { Direction } from '@/types';

type Props = {
  directions: Direction[];
};

export function RecipeDirections({ directions }: Props) {
  const t = useTranslations('Recipe');

  return (
    <div className={vstack({ alignItems: 'stretch', gap: '4' })}>
      <h2 className={css({ fontSize: '3xl', fontWeight: 600, textTransform: 'capitalize' })}>{t('directions')}</h2>
      <div className={vstack({ alignItems: 'stretch', gap: '5' })}>
        {directions.map((direction, index) => (
          <div key={index} className={hstack({ gap: '8' })}>
            <RecipeDirectionIcon>{index + 1}</RecipeDirectionIcon>
            <p>{direction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipeDirectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <Icon>
      <p className={css({ fontWeight: 600, fontSize: 'lg' })}>{children}</p>
    </Icon>
  );
}
