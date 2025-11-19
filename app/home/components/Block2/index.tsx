import type { FC } from 'react';
import classNames from 'classnames';
import CenterContent from '@/components/CenterContent';
import styles from './styles.module.scss';
import Powers from './powers';
import Cards from './cards';

const Block2: FC = () => {
  return (
    <div className={styles.container}>
      <CenterContent className={styles.content}>
        <h1 className={classNames('title', styles.title)}>
          The Power of our Technology
        </h1>
        <h2 className={classNames('title', styles.sub_title)}>
          Orbit Al's intelligent layer using ERP data and automation logic to simplify integrations
        </h2>
        <Powers />
        <Cards />
      </CenterContent>
    </div>
  );
}

export default Block2;