
type Todo = {
    id: string,
    title: string,
    completed: boolean
}

export interface IInitialState {
    status: string;
    list: Array<Todo>;
    error: string;
}

