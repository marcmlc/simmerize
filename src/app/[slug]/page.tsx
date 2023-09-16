import 'server-only';

import { notFound } from 'next/navigation';
import { getRecipes } from '@/api/getRecipes';

export const dynamicParams = false;

export async function generateStaticParams() {
  const recipes = await getRecipes();

  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const recipes = await getRecipes();

  const recipe = recipes.find((recipe) => recipe.slug === params.slug);
  if (!recipe) return notFound();

  return <div>Recipe: {recipe.name}</div>;
}
