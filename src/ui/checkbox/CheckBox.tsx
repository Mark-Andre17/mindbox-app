import { FC, memo, useCallback } from 'react';
import styles from './CheckBox.module.css';

interface ICheckBoxProps {
  completed: boolean;
  onChange: (comoleted: boolean) => void;
}

export const CheckBox: FC<ICheckBoxProps> = memo(({ completed, onChange }) => {
  const handleChange = useCallback(() => {
    onChange(!completed);
  }, [completed]);

  return (
    <div className={styles.checkBox}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <span className={styles.checkBoxLabel} />
    </div>
  );
});
