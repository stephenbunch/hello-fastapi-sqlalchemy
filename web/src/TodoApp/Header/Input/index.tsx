import { KeyboardEvent, useCallback, useRef, useState } from "react";
import { Key } from "ts-key-enum";
import { useCreateTodoMutation } from "../../../api";

export function Input() {
  const [createTodo] = useCreateTodoMutation();

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key === Key.Enter && value !== "") {
        setLoading(true);
        try {
          await createTodo({ todoCreate: { description: value } });
          setValue("");
        } finally {
          setLoading(false);
          inputRef.current?.focus();
        }
      }
    },
    [value, createTodo]
  );

  return (
    <input
      ref={inputRef}
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={onKeyDown}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={loading}
      autoFocus
    />
  );
}
