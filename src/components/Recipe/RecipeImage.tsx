import 'server-only';

import Image from 'next/image';

import { css } from '@styles/css';

export function RecipeImage({ image, slug }: { image: string; slug: string }) {
  return (
    <div
      className={css({
        width: 'full',
        position: 'relative',
        height: { base: '300px', md: '400px', lg: '500px' },
      })}
    >
      <Image
        fill
        src={image}
        alt={slug}
        className={css({
          borderRadius: 'lg',
          objectFit: 'cover',
        })}
      />
    </div>
  );
}
