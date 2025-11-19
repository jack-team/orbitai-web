import type { FC } from 'react';
import { Space } from 'antd';
import CenterContent from '@/components/CenterContent';
import Button from '@/components/Button';
import styles from './styles.module.scss';

const Banner: FC = () => {
  return (
    <div className={styles.banner_container}>
      <CenterContent className={styles.banner_content}>
        <div className={styles.title}>SmartClear AI™</div>
        <div className={styles.sub_title}>Redefining Customs Clearance Through Intelligent Automation</div>
        <div className={styles.desc}>Transform global customs operations with AI-driven automation, enabling faster, cleaner, and fully compliant trade flows across FDA, FTZ, and global entry regimes. The intelligent compliance infrastructure that powers seamless customs clearance.</div>
        <div className={styles.footer}>
          <Space size={106}>
            <Button>Book a Demo</Button>
            <Button type="purple">Contact Us​</Button>
          </Space>
        </div>
      </CenterContent>

    </div>
  );
}

export default Banner;