import 'server-only';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { RecipeFilters } from '../../../components/RecipeFilters';

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={flex({ flexDirection: 'column', gap: 12 })}>
      <h1
        className={css({
          textAlign: 'center',
          fontSize: { base: '4xl', md: '6xl' },
          fontWeight: 700,
          lineHeight: 1.35,
        })}>
        Les Recettes
      </h1>
      <RecipeFilters>{children}</RecipeFilters>
    </div>
  );
}
