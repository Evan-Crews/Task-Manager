import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css'

export const App = () => {
  return(
    <div className='outer div'>
      <h1>This is my solo project - Evan</h1>
      <div className='input div'>
        <input type='text' placeholder='please input a task'></input>
      <button >Add to Tasks</button>
      </div>
      <div className='Your List'>
        <h2>This is your To-Do list:</h2>
        <p>
          example 1, example 2
        </p>
      </div>
    </div>
  )
}

