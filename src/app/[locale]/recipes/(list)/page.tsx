import 'server-only';

import { unstable_setRequestLocale } from 'next-intl/server';

import { RecipeCards } from '@/components/RecipeCards';
import { getRecipes } from '@/utils/recipes';

type Props = {
  params: {
    locale: string;
  };
};

export default async function RootPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const recipes = await getRecipes();

  return <RecipeCards recipes={recipes} />;
}
