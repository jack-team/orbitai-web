import type { FC } from 'react';
import styles from './styles.module.scss';

export type CardData = {
  icon: string;
  title: string;
  desc: string;
}

type CardProps = {
  data: CardData;
}

const Card: FC<CardProps> = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <img
        alt="icon"
        src={data.icon}
        className={styles.icon}
      />
      <div className={styles.title}>
        {data.title}
      </div>
      <div className={styles.desc}>
        {data.desc}
      </div>
    </div>
  );
}

export default Card;