import React from 'react';
import { useState } from 'react';
import City from '../City.json'
const SearchFilter=()=>{
    const [data,setData]=useState();
    return(
        <div>
            <h2>Welcome to Search Filter App</h2>
            <h3>Enter u r City</h3>
           
<input type="text" value={data} onChange={(e)=>setData(e.target.value)} ></input><br></br>
          
            {
               
                City.filter(city=>city.name.includes(data)).map(city=>{
                    return <div style={{border:"1px solid black",margin:"2px"}}>{city.name}</div>
                })
                
            }
        </div>
    );
}
export default SearchFilter;
