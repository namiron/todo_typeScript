export interface ITodoItemType {
    id: string,
    completed: boolean,
    title: string
}

export interface ITodoFormType {
    value: string,
    handleSubmit: () => void,
    updateText: (text: string) => void
}