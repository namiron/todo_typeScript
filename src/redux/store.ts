import { configureStore, } from '@reduxjs/toolkit'
import todoSlice from './reducers/todoSlice';

const store = configureStore(
    {
        reducer: {
            todo: todoSlice,
        }
    }
)
export default store;

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;