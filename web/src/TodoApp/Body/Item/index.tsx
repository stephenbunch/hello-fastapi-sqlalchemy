import classNames from "classnames";
import { useCallback, useState, KeyboardEvent } from "react";
import { Key } from "ts-key-enum";
import { Todo } from "../../../api/generated";
import { useDeleteTodoMutation, usePatchTodoMutation } from "../../../api";

export interface TodoItemProps {
  todo: Todo;
}

export function Item(props: TodoItemProps) {
  const { todo } = props;

  const [deleteTodoMutation] = useDeleteTodoMutation();
  const [patchTodoMutation] = usePatchTodoMutation();

  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState("");

  const commitDescription = useCallback(async () => {
    await patchTodoMutation({ id: todo.id, todoPatch: { description } });
    setEditing(false);
    setDescription("");
  }, [todo, description, patchTodoMutation]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === Key.Enter) {
        commitDescription();
      } else if (e.key === Key.Escape) {
        setEditing(false);
        setDescription("");
      }
    },
    [commitDescription]
  );

  const beginEditing = useCallback(() => {
    setDescription(todo.description);
    setEditing(true);
  }, [todo]);

  const markCompleted = useCallback(async () => {
    await patchTodoMutation({
      id: todo.id,
      todoPatch: { completed: !todo.completed },
    });
  }, [todo, patchTodoMutation]);

  const deleteTodo = useCallback(async () => {
    await deleteTodoMutation({ id: todo.id });
  }, [todo, deleteTodoMutation]);

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          readOnly
          onClick={markCompleted}
        />
        <label onDoubleClick={beginEditing}>{todo.description}</label>
        <button className="destroy" onClick={deleteTodo}></button>
      </div>
      {editing && (
        <input
          className="edit"
          value={description}
          onKeyDown={onKeyDown}
          onBlur={commitDescription}
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        />
      )}
    </li>
  );
}
