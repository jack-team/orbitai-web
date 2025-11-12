import { type FC, type Key, type ReactElement, useMemo, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import { ModeType } from '@/components/BaseLayout/types'
import iconWhite from '@/assets/icons/icon_down_white.svg?url';
import iconBlack from '@/assets/icons/icon_down_black.svg?url';
import styles from './styles.module.scss';

export type MenuItemType = {
  key: Key;
  path?: string;
  className?: string;
  label: string | ReactElement;
  children?: MenuItemType[];
}

type MenuProps = {
  mode?: ModeType;
  menus?: MenuItemType[];
}

const Menu: FC<MenuProps> = (props) => {
  const { menus = [], mode = 'transparent' } = props;

  const items = useMemo(() => {
    const getItem = (item: MenuItemType): MenuItemType => {
      const path = item.path;
      const label = item.label;
      const childs = item.children || [];

      const arrowNode = childs.length ?
        <Fragment>
          <Image
            alt="icon"
            src={iconBlack}
            className={styles.icon_black}
          />
          <Image
            alt="icon"
            src={iconWhite}
            className={styles.icon_white}
          />
        </Fragment> : null;

      const labelNode = path ?
        <Link
          href={path}
          className={styles.label}
        >
          {label}{arrowNode}
        </Link> :
        <div className={styles.label}>
          {label}{arrowNode}
        </div>

      return {
        ...item,
        label: labelNode,
        className: styles.submenu,
        children: childs?.map(getItem)
      };
    }

    return menus.map(getItem);
  }, [menus]);

  return (
    <div className={classNames(styles.container, styles[mode])}>
      {items.map((item) => {
        const childs = item.children || [];
        return (
          <div
            key={item.key}
            className={styles.item}
          >
            <Dropdown
              arrow
              placement="bottom"
              menu={{ items: childs }}
              overlayClassName={styles.menu}
            >
              {item.label}
            </Dropdown>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;