import { ADD_TODO, COMPLETED_ALL, COMPLETED_TODO, DELETE_TODO, FILTER_TODO, MARK_INCOMPLETE, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";


const initialState={
    todos:[],
    filter:'ALL',
    searchTerm:''
}
const todoActions=(state=initialState, action)=>{
    switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, { text: action.payload.text, completed: false }],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case COMPLETED_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TODO:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case COMPLETED_ALL:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
}

export default todoActions