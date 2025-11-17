import type { FC } from 'react';
import styles from './styles.module.scss';

export type CardData = {
  domain: string;
  title: string;
  desc: string;
  footerText: string;
}

type CardProps = {
  data: CardData;
}

const Card: FC<CardProps> = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <div className={styles.domian}>
        {data.domain}
      </div>
      <div className={styles.title}>
        {data.title}
      </div>
      <div className={styles.desc}>
        {data.desc}
      </div>
      <div className={styles.footer}>
        {data.footerText}
      </div>
    </div>
  );
}

export default Card;