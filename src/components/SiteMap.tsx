import { useTranslations } from 'next-intl';

import { vstack } from '@styles/patterns';

import { FooterItem } from './FooterItem';

export function SiteMap() {
  const t = useTranslations('Footer.SiteMap');

  return (
    <FooterItem title={t('action')}>
      <div className={vstack({ alignItems: 'flex-start' })}>
        <FooterItem.Link href="/">{t('home')}</FooterItem.Link>
        <FooterItem.Link href="/recipes">{t('recipes')}</FooterItem.Link>
      </div>
    </FooterItem>
  );
}
