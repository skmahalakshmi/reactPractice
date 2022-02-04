import React from 'react'
import { useState } from 'react';
import Todolist from './Todolist';
const Todo=()=>{
    const [todos,setTodos]=useState([]);
    const [data,setData]=useState("");
    const submitHandler=(e)=>{

        e.preventDefault();
        const newTodos=[...todos,data];
        setTodos(newTodos);
        setData("");
            }
    const deletHandler=(indexvalue)=>{
const newTodo=todos.filter((value,index)=>index!==indexvalue)
setTodos(newTodo);
    }
return(

    <div>
        <h1 style={{color:"pink",backgroundColor:"blue",textAlign:"center"}}>Welcome To Todo Application</h1>
        <form onSubmit={submitHandler} style={{textAlign:"center"}}>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} ></input>
           <button
          
            style={{backgroundColor:"greenyellow",border:"1px solid black",margin:"5px"}}>ADD</button>
        </form>
        <div>
           <Todolist todos={todos} deletHandler={deletHandler}/>
        </div>
        </div>
);
}
export default Todo;