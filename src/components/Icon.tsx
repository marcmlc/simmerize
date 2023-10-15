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
      light: { bg: 'main.50', color: 'main.500' },
    },
    size: {
      md: { padding: '2', width: '10', height: '10' },
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
