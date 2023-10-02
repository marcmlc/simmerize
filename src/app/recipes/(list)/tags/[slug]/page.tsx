import 'server-only';

import { RecipeCards } from '@/components/RecipeCards';
import { Tag, TAGS_VALUES } from '@/types';
import { getRecipes } from '@/utils/recipes';

export const dynamicParams = false;

export async function generateStaticParams() {
  return TAGS_VALUES.map(tag => ({
    slug: tag,
  }));
}

export default async function RecipeTagPage({ params }: { params: { slug: string } }) {
  const recipes = await getRecipes();
  const filteredRecipes = recipes.filter(recipe => recipe.tags.includes(params.slug as Tag));

  return <RecipeCards recipes={filteredRecipes} />;
}
