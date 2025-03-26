import { FC, memo, useCallback } from 'react';
import { ITodo } from '../../types/types';
import { CheckBox, Button } from '../../ui';
import garbage from '../../assets/img/garbage.svg';
import styles from './todoItem.module.css';
import { useTodoStore } from '../../store/todoStore';

interface ITodoProps {
  todo: ITodo;
}

export const TodoItem: FC<ITodoProps> = memo(({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodoStore();

  const handleDelete = useCallback(() => {
    deleteTodo(todo.id);
  }, [todo]);
  const handleToggle = useCallback(() => {
    toggleTodo(todo.id);
  }, [todo]);

  return (
    <li className={styles.todoItem}>
      <CheckBox completed={todo.completed} onChange={handleToggle} />
      <p className={todo.completed ? styles.completed : ''}>{todo.title}</p>
      <div className={styles.todoBtns}>
        <Button onClick={handleDelete}>
          <img className={styles.garbage} src={garbage} alt="корзина" />
        </Button>
      </div>
    </li>
  );
});
