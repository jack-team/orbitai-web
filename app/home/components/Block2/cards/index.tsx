import type { FC } from 'react';
import styles from './styles.module.scss';

const items = [
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

const Cards: FC = () => {
  return (
    <div className={styles.container}>
      {items.map((item, i) => {
        return (
          <div key={i} className={styles.item}>
            <img
              alt="icon"
              src="/icons/icon_achieve.svg"
              className={styles.icon}
            />
            <div className={styles.content}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;