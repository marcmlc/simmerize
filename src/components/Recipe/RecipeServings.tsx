import { IconUsers } from '@tabler/icons-react';

import { css } from '@styles/css';
import { divider, hstack, vstack } from '@styles/patterns';

import { Icon } from '../Icon';

export function RecipeServings({ servings }: { servings: number }) {
  return (
    <div className={vstack({ alignItems: 'flex-start', width: 'full', gap: 8 })}>
      <div className={divider()} />
      <div className={hstack()}>
        <Icon size="sm" variant="outline">
          <IconUsers size={16} />
        </Icon>
        <p>
          Cette recette sert <span className={css({ fontWeight: 500 })}>{servings} personnes</span>.
        </p>
      </div>
      <div className={divider()} />
    </div>
  );
}
