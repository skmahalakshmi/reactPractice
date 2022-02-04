import React from 'react';
import { useState } from 'react';
const Movie=()=>{
    const [search,setSearch]=useState("")
    const [data,setData]=useState([])
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(search);
        
    }
    const changeHandler=(e)=>{
        setSearch(e.target.value)
    }
   
fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).
then(res=>res.json()).
then(value=>setData(value.Search));

  
    return(
        <div>
            <div style={{textAlign:"center"}}>
            <h1>Welcome To movie Search App</h1>
            <h2>Search Your Favourite Movie</h2>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} value={search} />
                <br></br>
                    <input type="submit"></input>
            </form>
            <div></div>
          {
         data?.length>0 && data.map((mm)=>
         <div class="card" style={{width: "18rem"}}>
  <img src={mm.Poster} class="card-img-top" alt={mm.Title}/>
  <div class="card-body">
    <h5 class="card-title">{mm.Title}</h5>
 
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

         
         )
          }
            </div>
          
        </div>
    );
}
export default Movie;