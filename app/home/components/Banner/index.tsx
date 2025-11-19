import type { FC } from 'react';
import classNames from 'classnames';
import CenterContent from '@/components/CenterContent';
import Button from '@/components/Button';
import styles from './styles.module.scss';

const Banner: FC = () => {
  return (
    <div className={classNames(styles.banner_wrapper)}>
      <div className={styles.banner_container}>
        <CenterContent className={styles.banner_content}>
          <div className={styles.content_inner}>
            <div className={styles.title_container}>
              <h1 className="title">Transforming Global</h1>
              <h1 className="title">Operations Through</h1>
              <h1 className={classNames('title', styles.l_text)}>Intelligent Automation</h1>
            </div>
            <h2 className={classNames('title', styles.sub_title)}>
              Simplify your workflows and automate your tasks with our cutting-edge Al solutions tailored for supply chain and logistics
            </h2>
            <Button className={styles.book_btn}>Book a Demo</Button>
          </div>
        </CenterContent>
        <div className={styles.display}>
          <div className={styles.display1}>
            <img
              alt="display"
              src="/images/display1.jpg"
            />
          </div>
          <div className={styles.display2}>
            <img
              alt="display"
              src="/images/display2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;