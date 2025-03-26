import { FC, memo, ReactNode } from 'react';
import styles from './Button.module.css';

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = memo(
  ({ children, onClick, disabled }) => {
    return (
      <button onClick={onClick} disabled={disabled} className={styles.myButton}>
        {children}
      </button>
    );
  },
);
