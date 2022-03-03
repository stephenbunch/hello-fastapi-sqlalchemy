import { emptyApi as api } from "./empty";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<GetTodosApiResponse, GetTodosApiArg>({
      query: () => ({ url: `/api/todos/` }),
    }),
    createTodo: build.mutation<CreateTodoApiResponse, CreateTodoApiArg>({
      query: (queryArg) => ({
        url: `/api/todos/`,
        method: "POST",
        body: queryArg.todoCreate,
      }),
    }),
    deleteTodos: build.mutation<DeleteTodosApiResponse, DeleteTodosApiArg>({
      query: (queryArg) => ({
        url: `/api/todos/`,
        method: "DELETE",
        params: { completed: queryArg.completed },
      }),
    }),
    patchTodos: build.mutation<PatchTodosApiResponse, PatchTodosApiArg>({
      query: (queryArg) => ({
        url: `/api/todos/`,
        method: "PATCH",
        body: queryArg.todoPatch,
        params: { completed: queryArg.completed },
      }),
    }),
    getTodo: build.query<GetTodoApiResponse, GetTodoApiArg>({
      query: (queryArg) => ({ url: `/api/todos/${queryArg.id}` }),
    }),
    deleteTodo: build.mutation<DeleteTodoApiResponse, DeleteTodoApiArg>({
      query: (queryArg) => ({
        url: `/api/todos/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    patchTodo: build.mutation<PatchTodoApiResponse, PatchTodoApiArg>({
      query: (queryArg) => ({
        url: `/api/todos/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.todoPatch,
      }),
    }),
    helloWorldHealthGet: build.query<
      HelloWorldHealthGetApiResponse,
      HelloWorldHealthGetApiArg
    >({
      query: () => ({ url: `/health` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type GetTodosApiResponse = /** status 200 Successful Response */ Todo[];
export type GetTodosApiArg = void;
export type CreateTodoApiResponse = /** status 200 Successful Response */ any;
export type CreateTodoApiArg = {
  todoCreate: TodoCreate;
};
export type DeleteTodosApiResponse = /** status 200 Successful Response */ any;
export type DeleteTodosApiArg = {
  completed?: boolean;
};
export type PatchTodosApiResponse =
  /** status 200 Successful Response */ Todo[];
export type PatchTodosApiArg = {
  completed?: boolean;
  todoPatch: TodoPatch;
};
export type GetTodoApiResponse = /** status 200 Successful Response */ Todo;
export type GetTodoApiArg = {
  id: string;
};
export type DeleteTodoApiResponse = /** status 200 Successful Response */ any;
export type DeleteTodoApiArg = {
  id: string;
};
export type PatchTodoApiResponse = /** status 200 Successful Response */ any;
export type PatchTodoApiArg = {
  id: string;
  todoPatch: TodoPatch;
};
export type HelloWorldHealthGetApiResponse =
  /** status 200 Successful Response */ any;
export type HelloWorldHealthGetApiArg = void;
export type Todo = {
  id: string;
  description: string;
  completed: boolean;
};
export type ValidationError = {
  loc: string[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type TodoCreate = {
  description: string;
  completed?: boolean;
};
export type TodoPatch = {
  description?: string;
  completed?: boolean;
};
