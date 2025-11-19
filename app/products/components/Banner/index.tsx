import type { FC } from 'react';
import classNames from 'classnames';
import CenterContent from '@/components/CenterContent';
import Button from '@/components/Button';
import styles from './styles.module.scss';

const Banner: FC = () => {
  return (
    <div className={classNames("block-container", styles.container)}>
      <CenterContent className={styles.banner_content}>
        <h1 className={classNames('title', styles.title)}>SmartClear AI™</h1>
        <div className={styles.sub_title}>Redefining Customs Clearance Through Intelligent Automation</div>
        <h2 className={classNames('title', styles.desc)}>Transform global customs operations with AI-driven automation, enabling faster, cleaner, and fully compliant trade flows across FDA, FTZ, and global entry regimes. The intelligent compliance infrastructure that powers seamless customs clearance.</h2>
        <div className={styles.btns}>
          <Button className={styles.btn}>Book a Demo</Button>
          <Button className={styles.btn} type="purple">Contact Us​</Button>
        </div>
      </CenterContent>
    </div>
  );
}

export default Banner;