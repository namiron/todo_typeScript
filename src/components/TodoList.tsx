import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import TodoItem from './TodoItem'


const TodoList: React.FC = () => {
    const list = useAppSelector((state) => state.todo.list)

    return (
        <ul>
            {list.map((el) => (
                <TodoItem key={el.id} {...el} />
            ))}
        </ul>
    )
}

export default TodoList