import { useCallback, useMemo } from "react";
import { Todo } from "../../api/generated";
import { usePatchTodosMutation } from "../../api";
import { Item } from "./Item";

export interface BodyProps {
  todos: Todo[];
}

export function Body(props: BodyProps) {
  const { todos } = props;

  const toggleAllChecked = useMemo(
    () => todos.filter((t) => t.completed).length === todos.length,
    [todos]
  );

  const [patchTodos] = usePatchTodosMutation();

  const toggleAll = useCallback(async () => {
    if (toggleAllChecked) {
      await patchTodos({ todoPatch: { completed: false } });
    } else {
      await patchTodos({ todoPatch: { completed: true } });
    }
  }, [toggleAllChecked, patchTodos]);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={toggleAllChecked}
        readOnly
      />
      <label htmlFor="toggle-all" onClick={toggleAll}></label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
