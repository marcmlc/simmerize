import 'server-only';

import Image from 'next/image';

import { css } from '@styles/css';

type Props = { image: string; slug: string };

export function RecipeCardImage({ image, slug }: Props) {
  return (
    <div
      className={css({
        width: 'full',
        position: 'relative',
        height: '200px',
      })}>
      <Image
        fill
        src={image}
        alt={slug}
        placeholder="blur"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={css({
          objectFit: 'cover',
        })}
      />
    </div>
  );
}
