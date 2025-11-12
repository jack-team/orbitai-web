import type { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import Header from './header';
import Content from './content';
import type { BaseLayoutProps } from './types';

const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = (props) => {
  const { children, ...reset } = props;
  return (
    <main className={styles.base_layout}>
      <Header {...reset} />
      <Content children={children} auto={reset.auto} />
    </main>
  );
}

export default BaseLayout;
