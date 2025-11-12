"use client";
import type { FC, PropsWithChildren, UIEventHandler } from 'react';
import EventEmitter from 'eventemitter3';
import classNames from 'classnames';
import { useMemoizedFn } from 'ahooks';
import Scrollbars from 'react-custom-scrollbars-2';
import BaseFooter from '../BaseFooter';
import styles from './styles.module.scss';

export type EventType = 'scroll';

export const scroller = new EventEmitter<EventType>();

const Content: FC<PropsWithChildren<{ auto?: boolean }>> = (props) => {
  const { auto = false } = props;

  const handleScroll = useMemoizedFn<UIEventHandler>((e) => {
    scroller.emit('scroll', e);
  });

  return (
    <div className={styles.layout_content}>
      <Scrollbars
        autoHide={false}
        onScroll={handleScroll}
        className={styles.scroller}
      >
        <div className={classNames(styles.scroll_content, !auto && styles.safe_area)}>
          {props.children}
          <BaseFooter />
        </div>
      </Scrollbars>
    </div>
  );
}

export default Content;