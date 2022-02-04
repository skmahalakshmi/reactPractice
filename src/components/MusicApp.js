import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Songs from './Songs';
const MusicApp=()=>{
    const [data,setData]=useState([]);
    const [search,setSearch]=useState(null);
    useEffect(()=>{
axios.get('https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json')
.then(
    res=>{
       
        console.log("data is ",res.data);
        !search?setData(res.data):setData(res.data.filter(songs=>songs.singer===search));
    }
)
    },[search])
    const onSubmit=(e)=>{
        e.preventDefault();
        setSearch(search);
    }
    return(
        <div>
            <h1>Welcome To Music App</h1>
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid'>
<h3 className='navbar-brand '>Music Application<span style={{color:"blue"}}></span></h3>
<form className='d-flex' onSubmit={onSubmit}>
<input className='form-control me-2' type="text"
onChange={(e)=>setSearch(e.target.value)}
></input>
<input className='btn-btn-outline-success' type="submit" value="search"></input>
</form>
                </div>

            </nav>

            {data?.length>0 && <center>
<Songs card={data}/>
               
            </center>
}
               
            

        </div>
    );
}
export default MusicApp;