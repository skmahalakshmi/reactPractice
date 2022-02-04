import React from 'react';
import { useContext } from 'react';
import {store} from './ContextApi'
const Count=()=>{
    const [data,setData]=useContext(store); 
    return(
        <div className='card'>
            <div className='card-body'>
component count
<h3 className='card-title'>{data.length}</h3>
            </div>
            
        </div>
    );
}
export default Count;