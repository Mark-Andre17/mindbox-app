interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

interface ITodoStore {
  todos: ITodo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
  deleteAllCompleted: () => void;
}

export type { ITodo, ITodoStore };
