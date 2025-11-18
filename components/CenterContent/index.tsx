import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type CenterContentProps = {
  className?: string;
}

const CenterContent: FC<PropsWithChildren<CenterContentProps>> = (props) => {
  return (
    <div className={classNames(styles.content, props.className)}>
      {props.children}
    </div>
  );
}

export default CenterContent;