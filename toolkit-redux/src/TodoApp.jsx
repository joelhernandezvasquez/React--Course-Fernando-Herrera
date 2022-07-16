import { useGetTodosQuery,useGetTodoQuery } from "./store/apis/todosApi"
import {useState} from 'react';

export const TodoApp = () => {

  // const {data:todos=[],isLoading}= useGetTodosQuery();

  const [todoId,setTodoId] = useState(1);
  const {data:todo,isLoading}= useGetTodoQuery(todoId);

  return (
    <>
    {console.log(todoId)}
    <h1> Todos -RTK Query</h1>
    <hr/>

    <p>isLoading:{isLoading? 'True': 'False'}</p>

    <pre>{JSON.stringify(todo)}</pre>

    <button onClick={()=> setTodoId(current => current -  1)}>
      Prev Todo
    </button>

    <button onClick={()=> setTodoId(current => current + 1)}>
        Next Todo
    </button>

     {/* <ul>
      {todos.map(todo =>{
        return(
            <li key={todo.id}> 
            <strong>{todo.completed? 'Done' :'Pending'} </strong>
            {todo.title}
            </li>
          )
      })}
     </ul> */}
    
    </>
  )
}
