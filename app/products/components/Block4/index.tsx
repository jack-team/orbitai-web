import type { FC } from 'react';
import { Row, Col } from 'antd';
import Card, { type CardData } from './card';
import styles from './styles.module.scss';

const items: CardData[] = [
  {
    domain: 'IngredientsOnline.com',
    title: '"Building the first AI-native marketplace for global ingredients."​',
    desc: 'OrbitAI.ai helped IngredientsOnline build a fully intelligent B2B ecosystem — transforming every SKU, supplier, and document into machine-readable knowledge.​',
    footerText: 'Now powering global ingredient trade with real-time visibility and AI-driven sourcing.'
  },
  {
    domain: 'East-West CFS & Logistics',
    title: '"Transforming warehouse operations from paper to intelligent automation."',
    desc: `East-West's warehouses now operate fully paperless, with OrbitAI.ai powering automated receiving, picking, packing, and shipment scanning.`,
    footerText: 'Customer service, buyers, and sellers gain instant access to live warehouse data — all through mobile automation.'
  }
];

const Block4: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          Proven in Real-World Operations
        </div>
        <Row gutter={[40, 40]}>
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

export default Block4;