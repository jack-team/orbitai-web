"use client";
import type { FC, ReactElement } from 'react';
import { useSafeState, useMemoizedFn } from 'ahooks';
import classNames from 'classnames';
import styles from './styles.module.scss';

type TabItem = {
  title: string;
  subTitle?: string;
  children?: ReactElement;
}

type TabsProps = {
  items?: TabItem[];
}

const Tabs: FC<TabsProps> = (props) => {
  const { items = [] } = props;
  const [activeIndex, setActiveIndex] = useSafeState(0);

  const handleTabClick = useMemoizedFn((indx: number) => {
    setActiveIndex(indx);
  });

  return (
    <div className={styles.tabs}>
      <div className={styles.left_tabs}>
        {items.map((item, i) => {
          const active = i === activeIndex;
          return (
            <div
              key={i}
              onClick={() => handleTabClick(i)}
              className={classNames(styles.tab_item, active && styles.active)}
            >
              <div className={styles.tab_title}>{item.title}</div>
              {!!item.subTitle && <div className={styles.tab_desc}>{item.subTitle}</div>}
            </div>
          );
        })}
      </div>
      <div className={styles.tab_panes}>
        {items.map((item, i) => {
          return i === activeIndex ? (
            <div key={i} className={styles.tab_pane_item}>
              {item.children}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Tabs;