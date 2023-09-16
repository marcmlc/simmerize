export type Recipe = {
  slug: string;
  name: string;
  preparationTime: number;
  cookingTime: number;
  restTime: number;
  ingredients: Ingredient[];
  steps: Step[];
  tags: Tag[];
};

export type Ingredient = {
  name: string;
  details?: string;
  quantity?: number;
  unit?: string;
};

export type Step = string;
export type Tag = string;
