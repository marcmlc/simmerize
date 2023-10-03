'use client';

import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

import { Badge } from '@/components/Badge';

type Props = {
  tag: string;
  href: string;
};

export function RecipeTagLink({ tag, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Badge variant={isActive ? 'dark' : 'light'}>{tag}</Badge>
    </Link>
  );
}
