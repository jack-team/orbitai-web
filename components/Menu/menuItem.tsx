import { type FC, Fragment } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import { useSafeState, useMemoizedFn } from 'ahooks';
import { type MenuItemType } from '.';
import iconDown from '@/assets/icon_down.svg'
import styles from './styles.module.scss';

type H5MenuProps = {
  menu: MenuItemType;
}

const MenuItem: FC<H5MenuProps> = (props) => {
  const { menu } = props;
  const [menuOpen, setMenuOpen] = useSafeState(false);

  const toggleMenu = useMemoizedFn(() => {
    setMenuOpen(!menuOpen);
  });

  const renderItem = (item: MenuItemType) => {
    return (
      <div className={styles.h5_menu_item_sub}>
        <Link href={item.path!}>{item.label}</Link>
      </div>
    );
  }

  const childs = menu?.children || []

  return (
    <div className={classNames(styles.h5_menu_item_container, menuOpen && styles.open)}>
      <div className={styles.h5_menu_item_content}>
        <Link href={menu.path || '/#'}>{menu.label}</Link>
        {!!childs?.length && (
          <div className={styles.arrow_switch} onClick={toggleMenu} >
            <Icon component={iconDown} />
          </div>
        )}
      </div>
      {childs.length > 0 && (
        <div className={styles.h5_menu_item_subs}>
          {childs.map(item => {
            return (
              <Fragment key={item.key}>
                {renderItem(item)}
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MenuItem;