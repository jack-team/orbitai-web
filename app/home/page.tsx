import type { FC } from 'react'
import BaseLayout from '@/components/BaseLayout';
import Banner from './components/Banner';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Block4 from './components/Block4';

const Home: FC = () => {
  return (
    <BaseLayout>
      <Banner />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </BaseLayout>
  );
}

export default Home;
