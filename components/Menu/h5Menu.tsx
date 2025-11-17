import { type FC, Fragment } from 'react';
import classNames from 'classnames';
import { useSafeState, useMemoizedFn } from 'ahooks';
import Icon, { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { type MenuItemType } from '.';
import MenuItem from './menuItem';
import Logo from '@/assets/logo.svg';
import styles from './styles.module.scss';

type H5MenuProps = {
  menus?: MenuItemType[];
}

const H5Menu: FC<H5MenuProps> = (props) => {
  const { menus } = props;
  const [menuOpen, setMenuOpen] = useSafeState(false);

  const openMenu = useMemoizedFn(() => {
    setMenuOpen(true);
  });

  const closeMenu = useMemoizedFn(() => {
    setMenuOpen(false);
  });

  const className = classNames(
    styles.h5_menu_content,
    menuOpen && styles.open
  );

  return (
    <Fragment>
      {!menuOpen && (
        <div
          onClick={openMenu}
          children={<MenuOutlined />}
          className={styles.h5_menu_switch}
        />
      )}
      <div className={className}>
        <div className={styles.menu_header}>
          <div className={styles.band}>
            <Icon component={Logo} className={styles.logo} />
            <div className={styles.app_name}>OrbitAi.dev</div>
          </div>
          <div
            onClick={closeMenu}
            children={<CloseOutlined />}
            className={styles.h5_menu_switch}
          />
        </div>
        <div className={styles.h5_menus}>
          {menus?.map(item => {
            return <MenuItem key={item.key} menu={item} />;
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default H5Menu;