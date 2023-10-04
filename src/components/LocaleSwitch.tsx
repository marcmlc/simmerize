import { useTranslations } from 'next-intl';

import { hstack } from '@styles/patterns';

import { FooterItem } from './FooterItem';

export function LocaleSwitch() {
  const t = useTranslations('Footer.Languages');

  return (
    <FooterItem title={`🌍 ${t('action')}`}>
      <div className={hstack()}>
        <FooterItem.Link href="/" locale="fr">
          {t('fr')}
        </FooterItem.Link>
        <FooterItem.Link href="/" locale="en">
          {t('en')}
        </FooterItem.Link>
      </div>
    </FooterItem>
  );
}
