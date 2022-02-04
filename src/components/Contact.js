import React from 'react';
import Email from './Email';
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Contact=()=>{
  let navs=useNavigate();
  const [auth,setAuth]=useState(false);
    if(auth){
        return <Navigate to='/email'/>
    }
    const flowers=["rose","lilly","lotus","jasmine","tullip","luckky"]
    const fil=flowers.filter((names)=>names.startsWith("l"))
    return(
        <div>
             <h1>Welcome to Contact us Application</h1>
             <div>
               {fil.map((value)=><li>{value}</li>)}
             </div>
             <button onClick={()=>
           setAuth(true) 
        } >Send Email</button>            
            
        </div>
    );
}
export default Contact;