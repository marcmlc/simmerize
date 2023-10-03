import 'server-only';

import { useTranslations } from 'next-intl';

import { css, cx } from '@styles/css';
import { grid, gridItem } from '@styles/patterns';

import { getTotalTime } from '@/utils/time';

type Props = {
  preparationTime: number;
  cookingTime?: number;
};

const PLACEHOLDER = '--';

export function RecipeMeta({ preparationTime, cookingTime }: Props) {
  const t = useTranslations('Recipe');

  const totalTime = getTotalTime({ preparationTime, cookingTime });

  return (
    <div
      className={grid({
        columns: 12,
        rowGap: 5,
        width: 'full',
        rounded: 'md',
        paddingBlock: '2.5',
        border: '1px solid token(colors.gray.200)',
      })}>
      <RecipeMetaItem
        className={gridItem({ colSpan: { base: 6, sm: 4 } })}
        time={preparationTime}
        label={t('preparationTime')}
      />
      <RecipeMetaItem
        className={gridItem({ colSpan: { base: 6, sm: 4 } })}
        time={cookingTime}
        label={t('cookingTime')}
      />
      <RecipeMetaItem className={gridItem({ colSpan: { base: 12, sm: 4 } })} time={totalTime} label={t('totalTime')} />
    </div>
  );
}

function RecipeMetaItem({ time, label, className }: { time?: number; label: string; className?: string }) {
  const t = useTranslations('Time');

  return (
    <div
      className={cx(
        className,
        css({
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        })
      )}>
      <p className={css({ fontSize: { base: 'sm', sm: 'md' }, fontWeight: 600, textTransform: 'uppercase' })}>
        {label}
      </p>
      <p>
        <span className={css({ fontWeight: 500, fontSize: 'lg' })}>{time || PLACEHOLDER}</span>&nbsp;
        {time && <span className={css({ fontSize: 'sm' })}>{t('minute', { count: time })}</span>}
      </p>
    </div>
  );
}
