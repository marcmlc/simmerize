import Image from 'next/image';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

export function RecipeImage({ image, slug }: { image: string; slug: string }) {
  return (
    <div
      className={flex({
        width: 'full',
        alignItems: 'center',
        position: 'relative',
        height: { base: '300px', md: '400px', lg: '500px' },
      })}
    >
      <Image
        fill
        src={image}
        alt={slug}
        className={css({
          width: 'full',
          height: 'full',
          borderRadius: 'lg',
          objectFit: 'cover',
        })}
      />
    </div>
  );
}
