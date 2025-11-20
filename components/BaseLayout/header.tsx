"use client";
import type { FC } from 'react';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import classNames from 'classnames';
import { useSafeState } from 'ahooks';
import Menu, { type MenuItemType } from '@/components/Menu';
import CenterContent from '@/components/CenterContent';
import { usePageScroll } from '@/hooks/usePageScroll';
import type { HeaderProps, ModeType } from './types';
import Logo from '@/assets/logo.svg';
import styles from './styles.module.scss';


enum ModeEnum {
  WHITE = 'white',
  TRANSPARENT = 'transparent'
}

const menuItems: MenuItemType[] = [
  {
    key: 'products',
    label: 'Products',
    path: '/products',
    children: [
      {
        key: 'fulfillQ',
        label: 'FulfillQ',
        path: '/fulfillQ'
      },
      {
        key: 'vendorPilot',
        label: 'VendorPilot',
        path: '/vendorPilot'
      },
      {
        key: 'c',
        label: 'SmartClear Al',
        path: '/smartClear-al'
      }
    ]
  },
  {
    key: 'capabilities',
    label: 'Capabilities',
    path: '/b',
    children: [
      {
        key: 'a',
        label: 'Capabilities A',
        path: '/a'
      }
    ]
  },
  {
    key: 'Customers',
    label: 'customers',
    path: '/b',
    children: [
      {
        key: 'a',
        label: 'Customers A',
        path: '/a'
      },
    ]
  },
  {
    key: 'about',
    label: 'About',
    path: '/about'
  }
]

const Header: FC<HeaderProps> = (props) => {
  const { auto = false, defaultMode = ModeEnum['TRANSPARENT'] } = props;
  const [mode, setMode] = useSafeState<ModeType>(defaultMode);

  usePageScroll((evt) => {
    const type = evt.type;
    const top = evt.scrollTop;
    switch (type) {
      case 'up': {
        if (top >= 90) setMode(ModeEnum.WHITE);
        break;
      }
      case 'down': {
        if (top <= 90) setMode(ModeEnum.TRANSPARENT);
        break;
      }
    }
  }, { enable: auto });

  return (
    <header className={classNames(styles.base_header, styles[mode])}>
      <CenterContent className={styles.base_header_content}>
        <Link href="/" className={styles.band}>
          <Icon component={Logo} className={styles.logo} />
          <div className={styles.app_name}>OrbitAi.dev</div>
        </Link>
        <Menu menus={menuItems} mode={mode} />
      </CenterContent>
    </header>
  )
}

export default Header;