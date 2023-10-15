import Link from 'next-intl/link';

import { css } from '@styles/css';
import { flex } from '@styles/patterns';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function FooterItem({ title, children }: Props) {
  return (
    <div
      className={flex({
        rowGap: 2,
        fontSize: 'sm',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
      })}>
      <p className={css({ fontWeight: 600 })}>{title}</p>
      {children}
    </div>
  );
}

function FooterItemLink({ href, locale, children }: { href: string; locale?: string; children: React.ReactNode }) {
  return (
    <Link href={href} locale={locale}>
      {children}
    </Link>
  );
}

FooterItem.Link = FooterItemLink;
