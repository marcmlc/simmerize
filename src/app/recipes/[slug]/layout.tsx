import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';

import { flex, hstack } from '@styles/patterns';

import { Badge } from '@/components/Badge';

export default function RecipeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={flex({ paddingBlock: 4 })}>
        <Link href="/recipes">
          <Badge
            variant="outline"
            size="sm"
            className={hstack({ gap: 0, alignItems: 'center', borderColor: 'gray.300', color: 'gray.500' })}>
            <IconChevronLeft size={18} />
            Retour aux recettes
          </Badge>
        </Link>
      </div>
      {children}
    </div>
  );
}
