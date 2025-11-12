"use client";
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useSafeState } from 'ahooks';
import Menu, { type MenuItemType } from '@/components/Menu';
import { usePageScroll } from '@/hooks/usePageScroll';
import type { HeaderProps, ModeType } from './types';
import logoWhite from '@/assets/logo-white.svg?url';
import logoBlack from '@/assets/logo-black.svg?url';
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
        key: 'a',
        label: 'Product A',
        path: '/a'
      },
      {
        key: 'b',
        label: 'Product B',
        path: '/a'
      },
      {
        key: 'c',
        label: 'Product C',
        path: '/a'
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
      <div className={styles.base_header_content}>
        <Link href="/" className={styles.band}>
          <Image
            height={40}
            alt="logo"
            src={logoWhite}
            className={styles.logo_white}
          />
          <Image
            height={40}
            alt="logo"
            src={logoBlack}
            className={styles.logo_black}
          />
        </Link>
        <Menu menus={menuItems} mode={mode} />
      </div>
    </header>
  )
}

export default Header;