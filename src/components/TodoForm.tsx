import React from 'react'
import { ITodoFormType } from '../types/Props'
import todo from './../modules/todo.module.scss'


const TodoForm: React.FC<ITodoFormType> = ({ value, updateText, handleSubmit }) => {
    return (
        <div className={todo.createNewTodoForm}>
            <input type="text"
                placeholder='new todo'
                value={value}
                onChange={(e) => updateText(e.target.value)}
            />
            <button className={todo.addTodo} onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}

export default TodoForm;