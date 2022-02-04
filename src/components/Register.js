import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const Register=()=>{
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''


    });
    const [count,setCount]=useState(0);
    const {username,email,password,confirmPassword}=data;
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submit=(e)=>{
        e.preventDefault();
    if(username.length<4){
    alert("username should be greathan 4 letters");
    }
    else if(password!==confirmPassword){
            alert("passwords are not matched");
        }
    else{
            console.log(data);
        }
axios.post('https://reactfirebasedb-49567-default-rtdb.firebaseio.com/register.json',data)
.then(()=>alert("submitted successfully"))
       
       
    }
     const changeData=(e)=>{
let dd=document.getElementById("dd");
dd.textContent="text click";
if(dd.textContent=="text click"){
    dd.textContent="clicked";
}
     }
     useEffect(()=>
         console.log("used use effect hook"),[count]
     )
    
    return(
        <div>
            <form onSubmit={submit}>
            <h2>Welcome to SignUp Page</h2>
            <input type="text" placeholder='Enter the name' name="username" value={username} onChange={changeHandler}></input><br></br>
            <input type="text" placeholder='Enter the email' name="email" value={email} onChange={changeHandler}></input><br></br>
            <input type="password" placeholder='Enter the password' name="password" value={password} onChange={changeHandler}></input><br></br>
            <input type="password" placeholder='Enter the confirm password' name="confirmPassword" value={confirmPassword} onChange={changeHandler}></input><br></br>
            {password!==confirmPassword?<h1>passwords are not matched</h1>:null}
            <input type="submit"></input>
            <p>Counter value is {count}</p>
            <button id="dd" onClick={()=>setCount(count+1)}>Click Here!!</button>
          
            </form>
           
        </div>
    );
}
export default Register;