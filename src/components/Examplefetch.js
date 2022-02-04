import React from 'react';
import {useState,useEffect} from 'react'
const Examplefetch=()=>{
    
    const [data,setData]=useState([]);
useEffect(()=>{

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(response=>setData(response))


},[])
    return(
<div>
<h2 style={{backgroundColor:"blue",textAlign:"center"}}> Welcome To fetch Api Example </h2>

{data.map((value,index)=><p key={value.id}>{value.title}</p>)}

</div>

    );
}
export default Examplefetch;