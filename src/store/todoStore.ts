import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { ITodo, ITodoStore } from '../types/types';
import { persist } from 'zustand/middleware';

export const useTodoStore = create<ITodoStore>()(
  persist(
    set => ({
      todos: [],
      addTodo: (text: string) =>
        set(state => ({
          todos: [
            ...state.todos,
            {
              id: uuidv4(),
              title: text,
              completed: false,
            } as ITodo,
          ],
        })),
      deleteTodo: (id: string) =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
      toggleTodo: (id: string) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),
      updateTodo: (id: string, text: string) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, title: text } : todo,
          ),
        })),
      deleteAllCompleted: () =>
        set(state => ({
          todos: state.todos.filter(todo => !todo.completed),
        })),
    }),
    {
      name: 'todo-store',
      partialize: state => ({ todos: state.todos }),
    },
  ),
);
