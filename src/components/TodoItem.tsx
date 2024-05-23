
import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { removeTodo } from '../redux/reducers/todoSlice';
import { ITodoItemType } from '../types/Props';
import { FaDeleteLeft } from "react-icons/fa6";

import todo from './../modules/todo.module.scss';
import Checkbox from './Checkbox';

const TodoItem: React.FC<ITodoItemType> = ({ id, completed, title }) => {
    const dispatch = useAppDispatch();
    const [isChecked, setChecked] = React.useState(false);
    return (
        <li className={todo.item}>
            <div className={todo.checkbox}> <Checkbox isChecked={isChecked} setChecked={setChecked} /></div>
            <div className={todo.title}>{title}</div>
            <button onClick={() => dispatch(removeTodo(id))}>
                <FaDeleteLeft className={todo.delete} />
            </button>
        </li>
    );
}

export default TodoItem;
