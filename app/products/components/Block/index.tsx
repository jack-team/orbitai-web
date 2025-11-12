import { type FC, type CSSProperties, useMemo } from 'react';
import { Row, Col } from 'antd';
import Card, { type CardData } from './card';
import styles from './styles.module.scss';

type BlockProps = {
  title: string;
  subTitle: string;
  desc: string;
  cards: CardData[];
  bgColor?: string;
}

const Block: FC<BlockProps> = (props) => {
  const { cards, bgColor = '#fff' } = props;

  const style = useMemo(() => {
    if (bgColor) {
      return {
        backgroundColor: bgColor
      } as CSSProperties
    }
  }, [bgColor]);

  return (
    <div className={styles.container} style={style}>
      <div className={styles.content}>
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.sub_title}>
          {props.subTitle}
        </div>
        <div className={styles.desc}>
          {props.desc}
        </div>
        <Row gutter={[60, 60]}>
          {cards.map((item, i) => {
            return (
              <Col key={i} span={8}>
                <Card data={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Block;