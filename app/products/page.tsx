import type { FC } from 'react'
import BaseLayout from '@/components/BaseLayout';
import Banner from './components/Banner';
import Block from './components/Block';

const Home: FC = () => {
  return (
    <BaseLayout defaultMode="white">
      <Banner />
      <Block
        title="Core Features"
        subTitle="AI-Powered Customs Clearance"
        desc="Automate FDA and FTZ entry processing with intelligent workflows"
        cards={[
          {
            icon: '/images/products/icon_1.svg',
            title: 'FDA Entry Automation',
            desc: 'Streamline FDA prior notice, compliance validation, and documentation requirements'
          },
          {
            icon: '/images/products/icon_2.svg',
            title: 'FTZ Processing',
            desc: 'Intelligent management of Foreign Trade Zone admissions, transfers, and inventory'
          },
          {
            icon: '/images/products/icon_3.svg',
            title: 'Smart Entry Classification',
            desc: 'AI-driven product classification and tariff code recommendations'
          }
        ]}
      />
      <Block
        bgColor="#F6F9FC"
        title="Core Features"
        subTitle="AI-Powered Customs Clearance"
        desc="Automate FDA and FTZ entry processing with intelligent workflows"
        cards={[
          {
            icon: '/images/products/icon_1.svg',
            title: 'FDA Entry Automation',
            desc: 'Streamline FDA prior notice, compliance validation, and documentation requirements'
          },
          {
            icon: '/images/products/icon_2.svg',
            title: 'FTZ Processing',
            desc: 'Intelligent management of Foreign Trade Zone admissions, transfers, and inventory'
          },
          {
            icon: '/images/products/icon_3.svg',
            title: 'Smart Entry Classification',
            desc: 'AI-driven product classification and tariff code recommendations'
          }
        ]}
      />
    </BaseLayout>
  );
}

export default Home;
