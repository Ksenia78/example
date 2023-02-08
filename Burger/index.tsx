import { FC, SyntheticEvent } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface BurgerProps {
  onClick: (e: SyntheticEvent) => void;
  isOpen: boolean;
  className?: string;
}

const Burger: FC<BurgerProps> = ({ onClick, isOpen, className }) => (
  <button
    onClick={onClick}
    className={cn(styles.burger, className, {
      [styles.burger_open]: !!isOpen,
    })}
  >
    <span></span>
  </button>
);

export default Burger;
