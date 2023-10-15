import fs from 'fs';
import path from 'path';

import { parse as parseYAML } from 'yaml';

import type { Recipe, RecipeCard } from '@/types';

const fsPromises = fs.promises;
const pathToRecipes = path.join(process.cwd(), 'recipes');

export const getRecipes = async (): Promise<RecipeCard[]> => {
  const recipes = await fsPromises.readdir(pathToRecipes);

  return await Promise.all(
    recipes.map(async fileName => {
      const slug = fileName.replace('.yaml', '');
      const recipe = await readRecipeFile({ fileName });

      return {
        slug,
        name: recipe.name,
      };
    })
  );
};

export const getRecipe = async ({ slug }: { slug: string }): Promise<Recipe> => {
  const fileName = `${slug}.yaml`;
  return readRecipeFile({ fileName });
};

async function readRecipeFile({ fileName }: { fileName: string }): Promise<Recipe> {
  const slug = fileName.replace('.yaml', '');
  const parsedContent = await fsPromises.readFile(`${pathToRecipes}/${fileName}`, { encoding: 'utf-8' });
  const recipe = parseYAML(parsedContent) as Recipe;

  return { ...recipe, slug };
}
