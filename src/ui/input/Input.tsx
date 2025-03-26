import { ChangeEvent, FC, KeyboardEvent, memo } from 'react';
import styles from './Input.module.css';

interface IInput {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent) => void;
}

export const Input: FC<IInput> = memo(({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.myInput}
    />
  );
});
