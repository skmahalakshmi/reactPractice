import React,{useState} from 'react';
const ReduxSub=()=>{
    const [data,setData]=useState(0);
    return(
        <div>
             <h3>Count from App js Component:{data}</h3>
<button onClick={()=>setData(data+1)}>Increment</button><button  onClick={()=>setData(data-1)}>Decrement</button>
        </div>
    );
}
export default ReduxSub;