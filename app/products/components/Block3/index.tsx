import type { FC } from 'react';
import { Row, Col } from 'antd';
import Card, { type CardData } from './card';
import styles from './styles.module.scss';
import iconWarehouse from '@/assets/icons/icon_warehouse.svg?url';
import iconTrade from '@/assets/icons/icon_trade.svg?url';
import iconCustoms from '@/assets/icons/icon_customs.svg?url';
import iconOem from '@/assets/icons/icon_oem.svg?url';

const items: CardData[] = [
  {
    icon: iconWarehouse,
    title: 'Warehouse Operators​',
    desc: 'Paperless receiving, picking, and shipping​',
    total: '3 challenges • 3 solutions'
  },
  {
    icon: iconTrade,
    title: 'Trade Distributors​',
    desc: 'Multi-brand distributors managing complex supplier networks and customer relationships​',
    total: '3 challenges • 3 solutions'
  },
  {
    icon: iconCustoms,
    title: 'Customs Brokers​',
    desc: 'Trade compliance specialists handling complex international documentation​',
    total: '3 challenges • 3 solutions'
  },
  {
    icon: iconOem,
    title: 'Food Processing Plants​​',
    desc: 'One time inquiry and purchase of ingredients based on the formula​',
    total: '3 challenges • 3 solutions'
  }
];

const Block3: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          Built for Your Company's Unique Challenges
        </div>
        <div className={styles.desc}>
          Each customer type faces distinct operational bottlenecks. Our AI helpers are specifically designed to address you's pain points with measurable results.
        </div>
        <Row gutter={[60, 60]}>
          {items.map((item, i) => {
            return (
              <Col key={i} span={12}>
                <Card data={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Block3;