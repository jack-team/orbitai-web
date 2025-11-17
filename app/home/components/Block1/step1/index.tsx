import type { FC } from 'react';
import styles from './styles.module.scss';

const Step1: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/images/home-block-1.png" alt="img" />
      </div>
    </div>
  );
}

export default Step1;