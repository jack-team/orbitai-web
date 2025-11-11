import type { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import Header from './header';
import Content from './content';

const BaseLayout: FC<PropsWithChildren> = (props) => {
  return (
    <main className={styles.base_layout}>
      <Header />
      <Content {...props} />
    </main>
  );
}

export default BaseLayout;
