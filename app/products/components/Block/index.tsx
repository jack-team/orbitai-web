import { type FC, type CSSProperties, useMemo } from 'react';
import classNames from 'classnames';
import CenterContent from '@/components/CenterContent';
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
    <div className="block-container" style={style}>
      <CenterContent className={styles.content}>
        <h1 className={classNames('title', styles.title)}>
          {props.title}
        </h1>
        <div className={styles.sub_title}>
          {props.subTitle}
        </div>
        <h2 className={classNames('title', styles.desc)}>
          {props.desc}
        </h2>
        <div className={styles.items}>
          {cards.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <Card data={item} />
              </div>
            );
          })}
        </div>
      </CenterContent>
    </div>
  );
}

export default Block;