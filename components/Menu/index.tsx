import { type FC, type Key, type ReactElement, useMemo } from 'react';
import Link from 'next/link';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import Icon from '@ant-design/icons';
import { ModeType } from '@/components/BaseLayout/types';
import H5Menu from './h5Menu';
import IconDown from '@/assets/icon_down.svg';
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
      const childs = item.children;

      const arrowNode = childs?.length ? (
        <Icon
          component={IconDown}
          className={styles.arrow}
        />
      ) : null;

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
      <div className={styles.content}>
        {items.map((item) => {
          const childs = item.children || [];

          const element = childs.length > 0 ? (
            <Dropdown
              arrow
              placement="bottom"
              menu={{ items: childs }}
              overlayClassName={styles.menu}
              openClassName={styles.menu_open}
            >
              {item.label}
            </Dropdown>
          ) : item.label;

          return (
            <div
              key={item.key}
              className={styles.item}
            >
              {element}
            </div>
          );
        })}
      </div>
      <H5Menu menus={menus} mode={mode} />
    </div>
  );
}

export default Menu;