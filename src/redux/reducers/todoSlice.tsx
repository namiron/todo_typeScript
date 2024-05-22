import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../../types/typeSlices'



const initialState: IInitialState = {
    status: '',
    list: [],
    error: ''
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, { payload }: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: payload,
                completed: false,
            })
        },
        todoComplete(state, { payload }: PayloadAction<string>) {
            const toggleTodo = state.list.find(el => el.id === payload)
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        },
        removeTodo(state, { payload }: PayloadAction<string>) {
            state.list = state.list.filter(el => el.id !== payload)
        }
    }
})
export const { addTodo, todoComplete, removeTodo } = todoSlice.actions

export default todoSlice.reducer;