import { useCallback, useMemo, useState } from 'react';
import { TodoItem } from '../../components';
import { useTodoStore } from '../../store/todoStore';
import { Button } from '../../ui';
import styles from './todosList.module.css';
import { ITodo } from '../../types/types';

export const TodoList = () => {
  const [filter, setFilter] = useState<string>('All');
  const { todos, deleteAllCompleted } = useTodoStore();

  const leftTodos = useMemo(() => {
    return todos.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0);
  }, [todos]);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'All':
        return todos;
      case 'Completed':
        return todos.filter(todo => todo.completed);
      case 'Active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  const handleFilterAll = useCallback(() => setFilter('All'), []);

  const handleFilterCompleted = useCallback(() => setFilter('Completed'), []);

  const handleFilterActive = useCallback(() => setFilter('Active'), []);

  const renderTodoItem = useCallback(
    (todo: ITodo) => <TodoItem key={todo.id} todo={todo} />,
    [],
  );
  return (
    <>
      <ul className={styles.todoList}>{filteredTodos.map(renderTodoItem)}</ul>
      <div className={styles.todoListFooter}>
        <p>Items left: {leftTodos}</p>
        <div className={styles.filterBtns}>
          <Button onClick={handleFilterAll}>All</Button>
          <Button onClick={handleFilterCompleted}>Completed</Button>
          <Button onClick={handleFilterActive}>Active</Button>
        </div>
        <Button onClick={deleteAllCompleted}>Delete Completed</Button>
      </div>
    </>
  );
};
