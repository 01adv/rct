import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // in this case action contains id and text values passed to it while addinng todo
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // in this case the action.payload contains the id passed by the user when it clicks the remove todo
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// exporting all the functionalities
export const {addTodo, removeTodo}= todoSlice.actions

// ab store m v to register karenge, jisse store update rahe, uske liye slice export karenge or use store m import karenge
export default todoSlice.reducer
