import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1 , text:"Hello world"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    // now we make reducers in reducers we add properties and functions like add , update , remove 
    reducers:{
        addTodo: (state , action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==(action.payload))
        },
        // updateTodo: (state , action)=>{
        //    state.todos.map(action.payload.id).text=action.payload.text
        // }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer
