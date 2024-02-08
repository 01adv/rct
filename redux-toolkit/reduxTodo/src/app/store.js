import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodoSlice'


export const store = configureStore({
    reducer: todoReducer
})

// store configuration
// next step create reducers named as slices