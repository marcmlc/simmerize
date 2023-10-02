export type Recipe = {
  name: string;
  slug: string;
  image: string;
  preparationTime: number;
  cookingTime?: number;
  servings: number;
  nutrition?: {
    calories?: string;
    fibres?: string;
    proteines?: string;
    glucides?: string;
    sucre?: string;
    matieresGrasses?: string;
  };
  ingredients: Ingredient[];
  directions: Direction[];
  tags: Tag[];
};

export type Ingredient = string;
export type Direction = string;

export type RecipeCard = Pick<Recipe, 'name' | 'slug' | 'image' | 'tags'>;

const TAGS = {
  facile: 'facile',
  dessert: 'dessert',
  dejeuner: 'dejeuner',
  diner: 'diner',
} as const;

export type Tag = (typeof TAGS)[keyof typeof TAGS];

export const TAGS_VALUES = Object.values(TAGS);
