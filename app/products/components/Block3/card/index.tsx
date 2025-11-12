import type { FC } from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import iconJump from '@/assets/icons/icon_jump.svg?url';
import styles from './styles.module.scss';

export type CardData = {
  icon: StaticImageData;
  title: string;
  desc: string;
  total: string;
}

type CardProps = {
  data: CardData;
}

const Card: FC<CardProps> = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <Image
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
      <div className={styles.footer}>
        <div className={styles.total}>{data.total}</div>
        <Link className={styles.explore} href="/">
          Explore <Image src={iconJump} alt="jump" />
        </Link>
      </div>
    </div>
  );
}

export default Card;