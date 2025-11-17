import type { FC } from 'react';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import Logo from '@/assets/logo.svg';
import styles from './styles.module.scss';

const menus = [
  {
    title: "Products",
    links: [
      { label: 'FulfillQ', href: '/' },
      { label: 'VendorPilot', href: '/' },
      { label: 'SmartClear Al', href: '/' },
      { label: 'FormuPilot', href: '/' },
      { label: 'IngredientsGPT', href: '/' }
    ]
  },
  {
    title: "Capabilities",
    links: [
      { label: 'Integrations', href: '/' },
      { label: 'Security', href: '/' }
    ]
  },
  {
    title: "Company",
    links: [
      { label: 'About', href: '/' },
      { label: 'Contact', href: '/' }
    ]
  }
];

const BaseFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.content_top}>
          <div className={styles.footer_content_left}>
            <Link href="/" className={styles.band}>
              <Icon component={Logo} className={styles.logo} />
              <div className={styles.app_name}>OrbitAi.dev</div>
            </Link>
            <div className={styles.title}>
              Transforming global operations through intelligent automation. Simplify your workflows and automate your tasks with cutting-edge AI solutions.
            </div>
            <div className={styles.desc_text}>
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
          <div className={styles.footer_content_right}>
            {menus.map((item, i) => {
              return (
                <div key={i} className={styles.menu_list}>
                  <div className={styles.menu_title}>{item.title}</div>
                  <ul>
                    {item.links.map((link, j) => {
                      return (
                        <li key={j}>
                          <Link href={link.href}>
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.center_line} />
        <div className={styles.content_bottom}>
          <div className={styles.cc}>© 2025 Orbit AI. All rights reserved.</div>
          <div className={styles.others}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie Policy</Link>
            <Link href="/">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BaseFooter;