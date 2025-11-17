import type { FC } from 'react';
import styles from './styles.module.scss';

const items = [
  {
    icon: '/icons/icon_cloud.svg',
    title: 'Advanced Al Integration',
    desc: 'Cutting-edge Al capabilities forintelligent automation'
  },
  {
    icon: '/icons/icon_erp.svg',
    title: 'Seamless ERP Connectivity',
    desc: 'Direct integration with your existing ERP systems'
  },
  {
    icon: '/icons/icon_automation.svg',
    title: 'Automation-First Approach',
    desc: 'Designed from the ground up for workflow automation'
  },
  {
    icon: '/icons/icon_processing.svg',
    title: 'Intelligent Data Processing',
    desc: 'Smart algorithms that learn and adapt to your needs'
  }
];

const powers: FC = () => {
  return (
    <div className={styles.container}>
      {items.map((item, i) => {
        return (
          <div key={i} className={styles.item}>
            <img
              alt="icon"
              src={item.icon}
              className={styles.icon}
            />
            <div className={styles.title}>
              {item.title}
            </div>
            <div className={styles.desc}>
              {item.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default powers;