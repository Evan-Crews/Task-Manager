import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { TaskList } from './TaskList.js';
import styles from './style.css'


export const App = () => {
  // create a new component to handle fetching tasks and rendering them
  // decide between a fetch api or axios post request
  // create a form that allows user to input data implement react hook forms if possible
  // on submit of form, a function will be invoked, that will consume the service
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);

  return(
    <div className='outerDiv'>
      <h1>This is my To-Do List</h1>
      <div className='inputDiv'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' id='task' placeholder='please input a task' 
          {...register("test", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a task"
            }
          })}
        />
        {errors.email && errors.email.message}


        <input type='submit' value='submit'></input>

        </form>
        {/* <button onClick={() => console.log(value)}>Add to Tasks</button> */}
        {/* need to build an onclick listener to invoke a fetch request to the local host tasks creat task end point */}
      </div>
      <TaskList/>
    </div>
  )
}

