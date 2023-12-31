import 'server-only';

import { IconUsers } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import { css } from '@styles/css';
import { divider, hstack, vstack } from '@styles/patterns';

import { Icon } from '../Icon';

export function RecipeServings({ servings }: { servings: number }) {
  const t = useTranslations('Recipe');

  return (
    <div className={vstack({ alignItems: 'flex-start', width: 'full', gap: 8 })}>
      <div className={divider()} />
      <div className={hstack()}>
        <Icon size="sm" variant="outline">
          <IconUsers size={16} />
        </Icon>
        <p>
          {t.rich('servings', {
            count: servings,
            important: chunks => <span className={css({ fontWeight: 500 })}>{chunks}</span>,
          })}
        </p>
      </div>
      <div className={divider()} />
    </div>
  );
}
