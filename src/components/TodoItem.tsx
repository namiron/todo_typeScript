
import React from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { removeTodo, todoComplete } from '../redux/reducers/todoSlice'
import { ITodoItemType } from '../types/Props'


const TodoItem: React.FC<ITodoItemType> = ({ id, completed, title }) => {
    const dispatch = useAppDispatch()

    return (
        <li>
            <input type="checkbox"
                checked={completed}
                onChange={() => dispatch(todoComplete(id))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    )
}

export default TodoItem;