'use client';

import { ReactNode } from 'react';

import { cva, cx, RecipeVariantProps } from '@styles/css';

type BadgeStyle = RecipeVariantProps<typeof badge>;

export type BadgeProps = BadgeStyle & {
  children: ReactNode;
  className?: string;
};

const badge = cva({
  base: {
    letterSpacing: 0.25,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  variants: {
    variant: {
      outline: { bg: 'white', border: '1px solid token(colors.main.500)', color: 'main.500' },
      light: { bg: 'main.50', color: 'main.500' },
      dark: { bg: 'main.500', color: 'white' },
    },
    size: {
      md: {
        paddingInline: '3',
        paddingBlock: '1',
        fontSize: { base: 'sm', md: 'sm' },
      },
      sm: {
        paddingInline: '1.5',
        paddingBlock: '0.5',
        fontSize: 'xs',
      },
    },
    radius: {
      full: { borderRadius: 'full' },
    },
  },
  defaultVariants: {
    variant: 'light',
    radius: 'full',
    size: 'md',
  },
});

export function Badge({ children, className, ...props }: BadgeProps) {
  const { size, variant, radius, ...rest } = props;

  return (
    <div {...rest} className={cx(className, badge({ size, variant, radius }))}>
      {children}
    </div>
  );
}
