import { useCallback, useEffect, useRef, useState } from 'react';
import { TodoList } from '../../modules';
import { useTodoStore } from '../../store/todoStore';
import { Input, Title } from '../../ui';
import { debounce } from 'lodash';
import styles from './mainPage.module.css';

export const MainPage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { addTodo } = useTodoStore();
  const debouncedAddTodoRef = useRef<ReturnType<typeof debounce> | null>(null);

  useEffect(() => {
    return () => {
      debouncedAddTodoRef.current?.cancel();
    };
  }, []);

  const handleAddTodo = useCallback(
    (value: string) => {
      if (value.trim()) {
        addTodo(value.trim());
        setInputValue('');
      }
    },
    [addTodo],
  );

  const debouncedHandleChange = useCallback(
    (value: string) => {
      debouncedAddTodoRef.current?.cancel();

      debouncedAddTodoRef.current = debounce(() => {
        handleAddTodo(value);
      }, 1000);

      debouncedAddTodoRef.current();
    },
    [handleAddTodo],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      if (value.trim()) {
        debouncedHandleChange(value);
      }
    },
    [debouncedHandleChange],
  );

  return (
    <div className={styles.mainPage}>
      <Title>TODOS</Title>
      <div className={styles.todos}>
        <Input
          placeholder="Добавить TODO"
          value={inputValue}
          onChange={handleChange}
        />
        <TodoList />
      </div>
    </div>
  );
};
