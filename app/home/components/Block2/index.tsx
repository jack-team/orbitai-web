import type { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Powers from './powers';
import Cards from './cards';
import iconAchieve from '@/assets/icons/icon_achieve.svg';

const cardTexts = [
  {
    title: 'Enterprise-Grade Security',
    desc: 'Bank-level encryption and compliance with industry standards'
  },
  {
    title: 'Scalable Architecture',
    desc: 'Built to grow with your business, from startup to enterprise'
  },
  {
    title: 'Real-Time Processing',
    desc: 'Lightning-fast data processing and instant insights'
  }
];

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