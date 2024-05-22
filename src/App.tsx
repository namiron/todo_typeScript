
import React, { useState } from 'react'
import './App.css'
import todo from './modules/todo.module.scss'
import { useAppDispatch } from './hooks/hooks'
import { addTodo } from './redux/reducers/todoSlice'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const App: React.FC = () => {
  //----------------------------
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    if (text.trim().length) {
      dispatch(addTodo(text))
      setText('')
    }

  }

  //----------------------------

  return (
    <div className='app'>
      <TodoForm value={text} handleSubmit={handleSubmit} updateText={setText} />
      <TodoList />
    </div>
  )
}

export default App
