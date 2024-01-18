import React, { useState } from 'react'
import {BsPlus, BsSearch} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addTodo, filterTodo, updateSearch } from '../redux/actions'
import FilterButton from './FilterButton'
import TodoList from './TodoList'

const Todo = () => {
  const dispatch= useDispatch()
  const [newTodo, setNewTodo]=useState('')
  const [searchTerm, setSearchTerm]=useState('')
  const handleNewTodo=()=>{
    const trimmedTodo=newTodo.trim()
    if(trimmedTodo!==""){
      dispatch(addTodo(trimmedTodo))
    }
  }
  const handleSearchUpdate=(value)=>{
    setSearchTerm(value)
    dispatch(updateSearch(value))
  }
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
        <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>CHECKLIST</h2>

        <div className='flex items-center mb-4'>
            <input type="text" 
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
            name='addTodo' id='addTodo' placeholder='Add something to remind yourself....' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
            <button onClick={handleNewTodo} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blur-600 focus:outline-none'><BsPlus/></button>
        </div>
        <div className='flex items-center justify-center'>

          <FilterButton/>
          <div className='flex items-center mb-4'>
          <input type="text" 
            value={searchTerm}
            onChange={(e)=>handleSearchUpdate(e.target.value)}
            name='searchtodo' id='searchtodo' placeholder='Search todo....' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
            <button onClick={()=>dispatch(updateSearch(searchTerm))} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blur-600 focus:outline-none'><BsSearch/></button>
          </div>
        </div>
        <TodoList/>
    </div>
  )
}

export default Todo