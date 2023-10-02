import 'server-only';

import Image from 'next/image';

import { css } from '@styles/css';
import { flex, vstack } from '@styles/patterns';

import { Badge } from '../Badge';
import { RecipeCard } from '@/types';

type Props = {
  recipe: RecipeCard;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <a
      href={`/recipes/${recipe.slug}`}
      className={css({
        overflow: 'hidden',
        borderRadius: 'lg',
        border: '1px solid token(colors.gray.200)',
      })}>
      <div
        className={css({
          width: 'full',
          position: 'relative',
          height: '200px',
        })}>
        <Image
          fill
          src={recipe.image}
          alt={recipe.slug}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={css({
            objectFit: 'cover',
          })}
        />
      </div>
      <div className={vstack({ alignItems: 'flex-start', gap: 2, paddingBlock: 4, paddingInline: 2 })}>
        <h1
          className={css({
            fontSize: 'xl',
          })}>
          {recipe.name}
        </h1>
        <div className={flex({ width: 'full', columnGap: 2 })}>
          {recipe.tags.map((tag, index) => (
            <Badge key={index} size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  );
}
