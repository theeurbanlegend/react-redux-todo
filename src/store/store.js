import { configureStore, createStore } from "@reduxjs/toolkit";
import todoActions from "../redux/todoReducer";

//  const store=configureStore(
//     {
//         reducer:{
//             todos:todoActions
//        }
//     })
const store= createStore(todoActions)

export default store