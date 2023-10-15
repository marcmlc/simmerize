import 'server-only';

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
      light: { bg: 'main.50', color: 'main.500' },
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
