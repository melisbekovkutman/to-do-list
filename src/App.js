import logo from './logo.svg';
import {Button,TextareaAutosize} from "@mui/material" 
import './App.css';
import React, { useState } from 'react'    
import Image from './img/todo-icon-5.jpg'


function App() {
    const [ text, setText] = useState ('')
    const [comment, setComment] = useState ()
    const [todo , setTodo] = useState ([])
    function addTodo() {
      setTodo([...todo, {
        title: text,
        comment: comment
      }])
      setText('')
      setComment('')
    }
  return (
    <div className="App">
      <div className='list'>
        <img className='logo' src={Image}/>
      <h1 className='todo'>To-Do List</h1>
      </div>
      <div>
        <input  
        type="text"
        value={text}
        placeholder='добавить текст...'
        onChange={e => setText(e.target.value)}
        />
        <TextareaAutosize className='area' placeholder="Добавить коментарий..." value={comment}
         onChange={e => setComment(e.target.value)}></TextareaAutosize>
        

        <Button variant="contained" onClick={addTodo}>search...</Button>

      
          {todo.map(item => (
            <div className='text'>
            <h1>
              {item.title}
            </h1>
            <>{item.comment}</>
            
            </div>
          ))}
    
      </div>
    </div>
  );
}

export default App;
