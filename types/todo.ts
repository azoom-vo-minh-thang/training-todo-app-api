export enum TodoStatus {
  todo = 0,
  done = 1,
}

export type Todo = {
  id: number;
  description: string;
  status: TodoStatus;
};
