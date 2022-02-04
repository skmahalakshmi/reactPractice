import axios from 'axios';

import React, { useEffect, useState } from 'react';
import Pages from './Pages';


const Pagination=()=>{
    const [data,setData]=useState([]);
    const [perPage,setPerPage]=useState([]);
    const PageNum=(n)=>{
        setPerPage(data.slice((n*10)-10,n*10))
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            res=>{setData(res.data);setPerPage(res.data.slice(0,10));}
        )
    },[])
    return(

        <div>
            <h1 style={{backgroundColor:"blue",textAlign:"center"}}>Welcome to Pagination </h1>
{data.length>=1?
<div>
    {perPage.map((value)=><p style={{border:"2px solid black"}}>{value.title}</p>)}<br></br>
    <Pages data={data} PageNum={PageNum}/>
</div>

:<p>Data not loaded</p>}

        </div>
        
    );
} 
export default Pagination;