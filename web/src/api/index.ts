import { generatedApi } from "./generated";

const LIST = "LIST";

enum TagType {
  Todo = "Todo",
}

export const api = generatedApi.enhanceEndpoints({
  addTagTypes: [TagType.Todo],
  endpoints: {
    getTodos: {
      providesTags: () => [{ type: TagType.Todo, id: LIST }],
    },
    getTodo: {
      providesTags: (todo) => [{ type: TagType.Todo, id: todo?.id }],
    },
    createTodo: {
      invalidatesTags: () => [{ type: TagType.Todo, id: LIST }],
    },
    patchTodo: {
      invalidatesTags: () => [{ type: TagType.Todo, id: LIST }],
    },
    patchTodos: {
      invalidatesTags: () => [{ type: TagType.Todo, id: LIST }],
    },
    deleteTodo: {
      invalidatesTags: () => [{ type: TagType.Todo, id: LIST }],
    },
    deleteTodos: {
      invalidatesTags: () => [{ type: TagType.Todo, id: LIST }],
    },
  },
});

export const {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useDeleteTodosMutation,
  useGetTodoQuery,
  useGetTodosQuery,
  usePatchTodoMutation,
  usePatchTodosMutation,
} = api;
