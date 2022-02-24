import React, { useEffect, useState } from 'react';
import './App.css';
import { Todo } from './pages/model';
import TodoList from './pages/TodoList/TodoList';
import { FaCheck } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoLists, setTodoLists] = useState<Todo[]>([]);
  const addHandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoLists([...todoLists, { id: Date.now(), todo, isDone: false }]);
      localStorage.setItem('todoList', JSON.stringify([...todoLists, { id: Date.now(), todo, isDone: false }]))
      setTodo('')
    }
  }
  useEffect(() => {
    const getItem: any = localStorage.getItem('todoList');
    if (getItem) {
      setTodoLists(JSON.parse(getItem))
    }
  }, [])
  const handleDone = (id: number) => {
    setTodoLists(
      todoLists.map(todoList => todoList.id === id ? { ...todoList, isDone: !todoList.isDone } : todoList)
    )
  }
  const handleDelete = (id: number) => {
    setTodoLists(
      todoLists.filter(todoList => todoList.id !== id)
    );
  }

  return (
    <div className='App'>
      <TodoList todo={todo} setTodo={setTodo} addHandle={addHandle}></TodoList>

      <div className='container' >
        <div className="row d-flex justify-content-center align-items-center flex-column mt-4">
          {
            todoLists.map((todoList, index) =>
              <div className="col-lg-4 col-md-7 col-12" key={index}>
                <div className="alert alert-light" role="alert">
                  <div className='d-flex justify-content-between align-items-center'>
                    {
                      todoList.isDone ? <s className='text-black fs-4'>{todoList.todo}</s> : <span className='text-black fs-4'>{todoList.todo}</span>
                    }
                    <div className='d-flex align-items-center'>
                      <span style={{ cursor: 'pointer' }} className='me-lg-3 me-md-3 me-2 text-success'
                        onClick={() => handleDone(todoList.id)}
                      ><FaCheck /></span>
                      <span
                        onClick={() => handleDelete(todoList.id)}
                        style={{ cursor: 'pointer' }} className='text-danger'><AiFillDelete /></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>)

    </div>
  );
};

export default App;
