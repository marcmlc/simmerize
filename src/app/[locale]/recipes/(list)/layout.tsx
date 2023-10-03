import 'server-only';

import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

import { RecipeFilters } from '../../../../components/RecipeFilters';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RecipesLayout({ children, params: { locale } }: Props) {
  const t = useTranslations('Recipes');
  unstable_setRequestLocale(locale);

  return (
    <div className={flex({ flexDirection: 'column', gap: 12 })}>
      <h1
        className={css({
          textAlign: 'center',
          fontSize: { base: '4xl', md: '6xl' },
          fontWeight: 700,
          lineHeight: 1.35,
        })}>
        {t('title')}
      </h1>
      <RecipeFilters>{children}</RecipeFilters>
    </div>
  );
}
