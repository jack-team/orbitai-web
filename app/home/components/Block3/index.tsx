import type { FC } from 'react';
import classNames from 'classnames';
import CenterContent from '@/components/CenterContent';
import Card, { type CardData } from './card';
import styles from './styles.module.scss';

const items: CardData[] = [
  {
    icon: '/icons/icon_warehouse.svg',
    title: 'Warehouse Operators​',
    desc: 'Paperless receiving, picking, and shipping​',
    total: '3 challenges • 3 solutions'
  },
  {
    icon: '/icons/icon_trade.svg',
    title: 'Trade Distributors​',
    desc: 'Multi-brand distributors managing complex supplier networks and customer relationships​',
    total: '3 challenges • 3 solutions'
  },
  {
    icon: '/icons/icon_customs.svg',
    title: 'Customs Brokers​',
    desc: 'Trade compliance specialists handling complex international documentation​',
    total: '3 challenges • 3 solutions'
  },
  {
    icon: '/icons/icon_oem.svg',
    title: 'Food Processing Plants​​',
    desc: 'One time inquiry and purchase of ingredients based on the formula​',
    total: '3 challenges • 3 solutions'
  }
];

const Block3: FC = () => {
  return (
    <div className={classNames('block-container', styles.container)}>
      <CenterContent>
        <h1 className={classNames('title', styles.title)}>
          Built for Your Company's Unique Challenges
        </h1>
        <h2 className={classNames('title', styles.sub_title)}>
          Each customer type faces distinct operational bottlenecks. Our AI helpers are specifically designed to address you's pain points with measurable results.
        </h2>
        <div className={styles.items}>
          {items.map((item, i) => {
            return (
              <div className={styles.item} key={i}>
                <Card data={item} />
              </div>
            );
          })}
        </div>
      </CenterContent>
    </div>
  );
}

export default Block3;