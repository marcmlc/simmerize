import 'server-only';

import { ReactNode } from 'react';

import { cva, cx, RecipeVariantProps } from '@styles/css';

type IconStyle = RecipeVariantProps<typeof icon>;

type Props = IconStyle & {
  children: ReactNode;
  className?: string;
};

const icon = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  variants: {
    variant: {
      outline: { color: 'main.500', border: '2px solid token(colors.main.400)' },
      light: { bg: 'main.50', color: 'main.500' },
    },
    size: {
      sm: { width: 8, height: 8 },
      md: { width: 10, height: 10 },
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

export function Icon({ children, className, ...props }: Props) {
  const { size, variant, radius, ...rest } = props;

  return (
    <div {...rest} className={cx(className, icon({ size, variant, radius }))}>
      {children}
    </div>
  );
}
