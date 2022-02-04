import React from 'react';
import {useState} from 'react'
import {Dropdown} from 'react-bootstrap'
const Login=()=>{
    const [data,setData]=useState({
        username:'',
        password:""
    })
    const {username,password}=data;
const changeHandler=(e)=>{
setData({...data,[e.target.name]:e.target.value});
}
const submit=(e)=>{
    e.preventDefault();
    console.log(data);
}
    return(
<div>
<h2 style={{backgroundColor:"blue",textAlign:"center"}}> Login Page </h2>
<form onSubmit={submit}>
<input type="text" name="username" value={username} placeholder="enter the username" onChange={changeHandler}></input><br></br>
<input type="password" name="password" value={password} placeholder="enter the password" onChange={changeHandler}></input><br></br>
<input type="submit"></input>
</form>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</div>


    );
}
export default Login;