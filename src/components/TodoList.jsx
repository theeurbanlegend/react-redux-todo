import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const searchTerm = useSelector((state) => state.searchTerm);
  const [filteredTodos, setFilteredTodos]=useState([])

  useEffect(() => {
    const filteredTodos = todos.filter((todo) => {
      const matchFilter =
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchSearch = todo.text.toLowerCase().includes(searchTerm);
      return matchFilter && matchSearch;
    });
    setFilteredTodos(filteredTodos)
  }, [todos, filter, searchTerm]);

  return (
    <div>
      <ul>
        <li className='my-2 text-sm italic'> All your Notes here...</li>
        {filteredTodos&& filteredTodos.map((todo,index)=>(
            <TodoItem key={index} todo={todo} id={index}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
