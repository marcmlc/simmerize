import { IconBrandGithubFilled } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import { hstack } from '@styles/patterns';

import { FooterItem } from './FooterItem';
import { Icon } from './Icon';

export function Resources() {
  const t = useTranslations('Footer.Resources');

  return (
    <FooterItem title={t('action')}>
      <div className={hstack({ justifyContent: 'flex-start' })}>
        <FooterItem.Link href="/">
          <Icon size="sm">
            <IconBrandGithubFilled />
          </Icon>
        </FooterItem.Link>
      </div>
    </FooterItem>
  );
}
