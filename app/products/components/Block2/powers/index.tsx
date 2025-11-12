import type { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import iconCloud from '@/assets/icons/icon_cloud.svg?url';
import iconErp from '@/assets/icons/icon_erp.svg?url';
import iconAutomation from '@/assets/icons/icon_automation.svg?url';
import iconProcessing from '@/assets/icons/icon_processing.svg?url';

const items = [
  {
    icon: iconCloud,
    title: 'Advanced Al Integration',
    desc: 'Cutting-edge Al capabilities forintelligent automation'
  },
  {
    icon: iconErp,
    title: 'Seamless ERP Connectivity',
    desc: 'Direct integration with your existing ERP systems'
  },
  {
    icon: iconAutomation,
    title: 'Automation-First Approach',
    desc: 'Designed from the ground up for workflow automation'
  },
  {
    icon: iconProcessing,
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
            <Image
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