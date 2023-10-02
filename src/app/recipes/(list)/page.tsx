import 'server-only';

import { RecipeCards } from '@/components/RecipeCards';
import { getRecipes } from '@/utils/recipes';

export default async function RootPage() {
  const recipes = await getRecipes();

  return <RecipeCards recipes={recipes} />;
}
