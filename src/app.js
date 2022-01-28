import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { TaskList } from './TaskList.js';
import styles from './style.css'
import { json } from 'body-parser';


export const App = () => {
  // create a new component to handle fetching tasks and rendering them
  // decide between a fetch api or axios post request
  // create a form that allows user to input data implement react hook forms if possible
  // on submit of form, a function will be invoked, that will consume the service
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [list, setList] = useState()
  useEffect(() => {
    const url = "http://localhost:3000/task";
      fetch(url)
        .then((data) => {
          return data.json()
          })
        .then((data) => setList(data))
  },[list])
  const onSubmit = values => {
    const url = "http://localhost:3000/task/create"
      fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values)
      })
        // .then((data) => {
        //   return data.json()
        // })
        .then((data) => console.log(data))
    const listCopy = [...list];
    listCopy.push(values);
    return setList(listCopy);
  }

  return(
    <div className='outerDiv'>
      <h1>This is my To-Do List</h1>
      <div className='inputDiv'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' id='task' placeholder='please input a task' 
          {...register("task", {
            required: true
          })}
        />
        <input type='submit' value='submit'></input>

        </form>
        {/* <button onClick={() => console.log(value)}>Add to Tasks</button> */}
        {/* need to build an onclick listener to invoke a fetch request to the local host tasks creat task end point */}
      </div>
      <TaskList list={list}/>
    </div>
  )
}

