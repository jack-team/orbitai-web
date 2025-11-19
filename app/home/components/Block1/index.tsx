import type { FC } from 'react';
import classNames from 'classnames';
import Tabs from '@/components/Tabs';
import CenterContent from '@/components/CenterContent';
import styles from './styles.module.scss';
import Step1 from './step1';

const Block1: FC = () => {
  return (
    <div className={classNames('block-container', styles.container)}>
      <CenterContent className={styles.content}>
        <h1 className={classNames('title', styles.title)}>
          Our Product Ecosystem
        </h1>
        <Tabs
          items={[
            {
              title: 'FulfillQ',
              subTitle: 'One time inquiry and purchase',
              children: <Step1 />
            },
            {
              title: 'SmartClear Al',
              subTitle: 'Automate customs clearance workflows',
              children: <Step1 />
            },
            {
              title: 'FormuPilot',
              subTitle: 'Smart formulation and quoting',
              children: <Step1 />
            },
            {
              title: 'IngredientsGPT',
              subTitle: 'Al-powered ingredient intelligence',
              children: <Step1 />
            }
          ]}
        />
      </CenterContent>
    </div>
  );
}

export default Block1;