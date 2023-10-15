import { css } from '@styles/css';
import { hstack, vstack } from '@styles/patterns';

import { Icon } from '@/components/Icon';
import { Direction } from '@/types';

type Props = {
  directions: Direction[];
};

export function Directions({ directions }: Props) {
  return (
    <div className={vstack({ alignItems: 'stretch', gap: '7' })}>
      <h2 className={css({ fontSize: '3xl', fontWeight: 600 })}>
        Instructions
      </h2>
      <div className={vstack({ alignItems: 'stretch', gap: '6' })}>
        {directions.map((direction, index) => (
          <div key={index} className={hstack({ gap: '8' })}>
            <DirectionIcon>{index + 1}</DirectionIcon>
            <p>{direction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DirectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <Icon>
      <p className={css({ fontWeight: 600 })}>{children}</p>
    </Icon>
  );
}
