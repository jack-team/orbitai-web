import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonProps = {
  children: ReactElement | string;
  onClick?: () => void;
  type?: "bulue" | "purple";
}

const Button: FC<ButtonProps> = (props) => {
  const { type = 'bulue' } = props;
  return (
    <button
      className={classNames(styles.btn, styles[type])}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;