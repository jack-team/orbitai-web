"use client";
import type { FC, PropsWithChildren } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import BaseFooter from '../BaseFooter';
import styles from './styles.module.scss';

const Content: FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.layout_content}>
      <Scrollbars>
        {props.children}
        <BaseFooter />
      </Scrollbars>
    </div>
  );
}

export default Content;