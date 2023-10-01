import 'server-only';

import { ReactNode } from 'react';

import { cva, cx, RecipeVariantProps } from '@styles/css';

type BadgeStyle = RecipeVariantProps<typeof badge>;

type Props = BadgeStyle & {
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
      sm: {
        paddingInline: '3',
        paddingBlock: '1',
        fontSize: { base: 'xs', md: 'sm' },
      },
    },
    radius: {
      full: { borderRadius: 'full' },
    },
  },
  defaultVariants: {
    variant: 'light',
    radius: 'full',
    size: 'sm',
  },
});

export function Badge({ children, className, ...props }: Props) {
  const { size, variant, radius, ...rest } = props;

  return (
    <div {...rest} className={cx(className, badge({ size, variant, radius }))}>
      {children}
    </div>
  );
}
