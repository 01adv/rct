 import {configureStore} from '@reduxjs/toolkit'

 //default export from todoSlice
import todoReducer from '../feature/todo/todoSlice'
 export const store = configureStore({
    reducer: todoReducer
 })