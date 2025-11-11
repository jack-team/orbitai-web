import type { FC } from 'react'
import BaseLayout from '@/components/BaseLayout';
import Banner from './components/Banner';
import Block1 from './components/Block1';
import Block2 from './components/Block2';

const Home: FC = () => {
  return (
    <BaseLayout>
      <Banner />
      <Block1 />
      <Block2 />
    </BaseLayout>
  );
}

export default Home;
