import React, { useState } from 'react'
import './App.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo]);
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App


