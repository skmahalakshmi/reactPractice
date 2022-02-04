import React from 'react';
const Todolist =({todos,deletHandler})=>{
    return(
        <div>
            <p>Total Todos are {todos.length>0?<p>{todos.length}</p>:<p>0</p>}</p>
            <div>
                {todos.map((value,index)=>
                <div key={index}> 
                    <h3>{value} &nbsp;<button style={{backgroundColor:"red"}}onClick={()=>deletHandler(index)}>
                        Delete</button></h3>
                </div>
                )}
            </div>
        </div>
    );
}
export default Todolist;