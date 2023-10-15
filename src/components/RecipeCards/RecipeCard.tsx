import 'server-only';

import Link from 'next/link';

import { css } from '@styles/css';

import { RecipeCardImage } from './RecipeCardImage';
import { RecipeCardName } from './RecipeCardName';
import { RecipeCard } from '@/types';

type Props = {
  recipe: RecipeCard;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className={css({
        overflow: 'hidden',
        borderRadius: 'lg',
        border: '1px solid token(colors.gray.200)',
      })}>
      <RecipeCardImage image={recipe.image} slug={recipe.slug} />
      <RecipeCardName name={recipe.name} tags={recipe.tags} />
    </Link>
  );
}
