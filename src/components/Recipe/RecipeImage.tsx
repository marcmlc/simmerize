import 'server-only';

import Image from 'next/image';

import { css } from '@styles/css';

export function RecipeImage({ image, slug }: { image: string; slug: string }) {
  return (
    <div
      className={css({
        width: 'full',
        height: { base: '300px', md: '400px' },
        position: { base: 'relative', lg: 'absolute' },
        lg: {
          paddingTop: '125%',
          top: 0,
          left: 0,
        },
      })}>
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
