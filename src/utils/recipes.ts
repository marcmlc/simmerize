import fs from 'fs';
import path from 'path';

import { parse as parseYAML } from 'yaml';

import type { Recipe, RecipeCard } from '@/types';

const fsPromises = fs.promises;

export const getRecipes = async ({ locale }: { locale: string }): Promise<RecipeCard[]> => {
  const recipes = await fsPromises.readdir(getPathToRecipes({ locale }));

  return await Promise.all(
    recipes.map(async fileName => {
      const slug = fileName.replace('.yaml', '');
      const recipe = await readRecipeFile({ fileName, locale });

      return {
        slug,
        name: recipe.name,
        image: recipe.image,
        tags: recipe.tags,
      };
    })
  );
};

export const getRecipe = async ({ slug, locale }: { slug: string; locale: string }): Promise<Recipe> => {
  const fileName = `${slug}.yaml`;
  return readRecipeFile({ fileName, locale });
};

async function readRecipeFile({ fileName, locale }: { fileName: string; locale: string }): Promise<Recipe> {
  const slug = fileName.replace('.yaml', '');
  const parsedContent = await fsPromises.readFile(`${getPathToRecipes({ locale })}/${fileName}`, { encoding: 'utf-8' });
  const recipe = parseYAML(parsedContent) as Recipe;

  return { ...recipe, slug };
}

function getPathToRecipes({ locale }: { locale: string }) {
  return `${path.join(process.cwd(), 'recipes')}/${locale}`;
}
