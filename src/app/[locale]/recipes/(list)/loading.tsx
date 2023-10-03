import { grid } from '@styles/patterns';

import { CardSkeleton } from '@/components/CardSkeleton';

export default function LoadingRecipeTag() {
  return (
    <div className={grid({ columns: { smDown: 1, sm: 2, md: 3, lg: 4 }, columnGap: 6, rowGap: 6 })}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
