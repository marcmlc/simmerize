'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
