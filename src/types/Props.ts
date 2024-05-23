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

export interface ICheckedType {
    isChecked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
