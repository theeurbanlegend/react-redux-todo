import { ADD_TODO, COMPLETED_ALL, COMPLETED_TODO, DELETE_TODO, FILTER_COMPLETED_TODO, FILTER_TODO, MARK_INCOMPLETE, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";

export const addTodo=(text)=>({
    type:ADD_TODO,
    payload:{text}
})
export const markAllCompleted=()=>({
    type:COMPLETED_ALL
})
export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:{id}
})
export const completedTodo=(id)=>({
    type:COMPLETED_TODO,
    payload:{id}
})
export const markIncomplete=(id)=>({
    type:MARK_INCOMPLETE,
    payload:{id}
})
export const filterTodo=(filter)=>({
    type:FILTER_TODO,
    payload:{filter}
})
export const filterCompleted=(filter)=>({
    type:FILTER_COMPLETED_TODO,
    payload:{filter}
})
export const toggleTodo=(id)=>({
    type:TOGGLE_TODO,
    payload:{id}
})
export const updateSearch=(filter)=>({
    type:UPDATE_SEARCH_TERM,
    payload:{searchTerm:filter}
})
