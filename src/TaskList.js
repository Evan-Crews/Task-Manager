import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css'

export const TaskList = () => {
  const [list, setList] = useState()
  useEffect(() => {
    const url = "http://localhost:3000/task";
      fetch(url)
        .then((data) => {
          return data.json()
          })
        .then((data) => setList(data))
  },[])
  return (
    <div className='Your List'>
        <h2>This is your To-Do list:</h2>
        <ul>
          {list && list.map((ele, index) => {
            return <li key={index}>{ele.task}</li>
          })}
        </ul>
      </div>
  )
};
