import type { FC } from 'react';
import styles from './styles.module.scss';
import Powers from './powers';
import Cards from './cards';

const Block2: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          The Power of our Technology
        </div>
        <div className={styles.desc}>
          Orbit Al's intelligent layer using ERP data and automation logic to simplify integrations
        </div>
        <Powers />
        <Cards />
      </div>
    </div>
  );
}

export default Block2;