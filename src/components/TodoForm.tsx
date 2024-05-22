import React from 'react'
import { ITodoFormType } from '../types/Props'

const TodoForm: React.FC<ITodoFormType> = ({ value, updateText, handleSubmit }) => {
    return (
        <label>
            <input type="text"
                placeholder='new todo'
                value={value}
                onChange={(e) => updateText(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default TodoForm