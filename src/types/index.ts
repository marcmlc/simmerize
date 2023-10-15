export type Recipe = {
  name: string;
  slug: string;
  image: string;
  preparationTime: number;
  cookingTime: number;
  restTime: number;
  ingredients: Ingredient[];
  directions: Direction[];
  tags: Tag[];
};

export type Ingredient = string;
export type Direction = string;
export type Tag = string;

export type RecipeCard = Pick<Recipe, 'name' | 'slug'>;
