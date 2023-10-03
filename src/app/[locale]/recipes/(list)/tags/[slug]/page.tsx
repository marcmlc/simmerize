import 'server-only';

import { unstable_setRequestLocale } from 'next-intl/server';

import { RecipeCards } from '@/components/RecipeCards';
import { Tag, TAGS_VALUES } from '@/types';
import { getRecipes } from '@/utils/recipes';

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return TAGS_VALUES.map(tag => ({
    slug: tag,
  }));
}

export default async function RecipeTagPage({ params: { slug, locale } }: Props) {
  unstable_setRequestLocale(locale);

  const recipes = await getRecipes();
  const filteredRecipes = recipes.filter(recipe => recipe.tags.includes(slug as Tag));

  return <RecipeCards recipes={filteredRecipes} />;
}
