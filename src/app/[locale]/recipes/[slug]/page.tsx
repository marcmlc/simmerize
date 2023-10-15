import 'server-only';

import { unstable_setRequestLocale } from 'next-intl/server';

import { Recipe } from '@/components/Recipe';
import { getRecipe, getRecipes } from '@/utils/recipes';

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const recipes = await getRecipes();

  return recipes.map(recipe => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({ params: { slug, locale } }: Props) {
  unstable_setRequestLocale(locale);

  const recipe = await getRecipe({ slug });

  return <Recipe recipe={recipe} />;
}
