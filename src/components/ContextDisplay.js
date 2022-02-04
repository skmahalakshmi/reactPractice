import React from 'react';
import { useContext,useState } from 'react';
import {store} from './ContextApi'
const ContextDisplay=()=>{
    const [data,setData]=useContext(store); 
    const [name,setName]=useState("");
    const submit=(e)=>{
e.preventDefault();
setData([...data,{brandname:name}])
    }
    return(
        <div className='card'>
            <div className='card-body'>{
                data.map(item=><h3>{item.brandname}</h3>)
            }
            <form onSubmit={submit}>
                <input type="text" 
                onChange={(e)=>setName(e.target.value)}
                placeholder="enter u r brandname"></input>
<input type="submit" value="Add"></input>
            </form>
            
        </div>
        </div>
    );
}
export default ContextDisplay;