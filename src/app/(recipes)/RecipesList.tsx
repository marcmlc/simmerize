import 'server-only';

import { getRecipes } from '@/api/getRecipes';

export async function RecipesList() {
  const recipes = await getRecipes();

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.slug}>
          <a href={`/${recipe.slug}`}>{recipe.name}</a>
        </li>
      ))}
    </ul>
  );
}
