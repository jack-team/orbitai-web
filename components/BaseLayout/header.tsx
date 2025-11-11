import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import logoWhite from '@/assets/logo-white.svg?url';
import logoBlack from '@/assets/logo-black.svg?url';

const Header: FC = () => {
  return (
    <header className={styles.base_header}>
      <div className={styles.base_header_content}>
        <Link href="/" className={styles.band}>
          <Image src={logoWhite} height={40} alt="logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header;