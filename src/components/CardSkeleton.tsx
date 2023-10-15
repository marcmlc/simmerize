import { css } from '@styles/css';

export function CardSkeleton() {
  return (
    <div
      className={css({
        animation: 'token(animations.pulse)',
        height: '200px',
        width: 'full',
        bg: 'gray.200',
        borderRadius: 'lg',
        border: '1px solid token(colors.gray.200)',
      })}
    />
  );
}
