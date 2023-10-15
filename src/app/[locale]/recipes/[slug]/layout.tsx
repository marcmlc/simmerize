import { IconChevronLeft } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { unstable_setRequestLocale } from 'next-intl/server';

import { css } from '@styles/css';
import { flex, hstack } from '@styles/patterns';

import { Badge } from '@/components/Badge';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RecipeLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Recipe');

  return (
    <div className={css({ height: 'full' })}>
      <div className={flex({ paddingBlock: 4 })}>
        <Link href="/recipes">
          <Badge
            variant="outline"
            size="sm"
            className={hstack({ gap: 0, alignItems: 'center', borderColor: 'gray.300', color: 'gray.500' })}>
            <IconChevronLeft size={18} />
            {t('back')}
          </Badge>
        </Link>
      </div>
      {children}
    </div>
  );
}
