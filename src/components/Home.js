import React from 'react';
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import pic from '../pic.jfif';
import Audio from '../Audio.mp3'
import Video from '../Video.mp4'
const Home=()=>{
    let navs=useNavigate();
    const [auth,setAuth]=useState(false);
    if(auth){
        return <Navigate to='/dashboard'/>
    }
    return(
        <div> <h1 style={{textAlign:"center",backgroundColor:"grey"}}>Welcome to Home page</h1>
        <img src={pic} width="auto" height="250"></img>
        
        <audio controls>
            <source src={Audio} type="audio/ogg"></source>
        </audio>
        <video controls width="320" height="250">

<source src={Video} type="video/mp4"></source>
        </video>
        
        <button onClick={()=>
           setAuth(true) 
        } >Go to Dashboard using redirect / navigate</button>

        <button onClick={()=>navs('./dashboard')}>Go to Dashboard using useHistory Hook </button>
        
        </div>
    );
}
export default Home;