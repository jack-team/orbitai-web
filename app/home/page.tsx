import type { FC } from 'react'
import { Button } from 'antd';
import BaseLayout from '@/components/BaseLayout';
import Banner from './components/Banner';
import styles from './styles.module.scss';

const Home: FC = () => {
  return (
    <BaseLayout>
      <Banner />
      <div className={styles.center}>
        <div className={styles.center_content}>
          <div className={styles.center_title}>Our Product Ecosystem</div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Home;
