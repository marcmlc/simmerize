import { Recipe } from '@/types';
import fs from 'fs';
import path from 'path';
import { parse as parseYAML } from 'yaml';

const fsPromises = fs.promises;

export const getRecipes = async (): Promise<Recipe[]> => {
  const pathToRecipes = path.join(process.cwd(), 'recipes');
  const recipes = await fsPromises.readdir(pathToRecipes);

  return recipes.map((fileName) => {
    const slug = fileName.replace('.yaml', '');
    const parsedContent = parseYAML(
      fs.readFileSync(`${pathToRecipes}/${fileName}`, 'utf-8')
    );

    return {
      slug,
      ...parsedContent,
    };
  });
};
