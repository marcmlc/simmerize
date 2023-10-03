import 'server-only';

import { unstable_setRequestLocale } from 'next-intl/server';

import { Recipe } from '@/components/Recipe';
import { locales } from '@/navigation';
import { getRecipe, getRecipes } from '@/utils/recipes';

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return await Promise.all(
    locales.map(async locale => {
      const recipes = await getRecipes({ locale });

      return recipes.map(recipe => ({
        locale,
        slug: recipe.slug,
      }));
    })
  );
}

export default async function RecipePage({ params: { slug, locale } }: Props) {
  unstable_setRequestLocale(locale);

  const recipe = await getRecipe({ slug, locale });

  return <Recipe recipe={recipe} />;
}
