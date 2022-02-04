import axios from 'axios';

import React, { useEffect, useState } from 'react';
const Pages=({data,PageNum})=>{
    let pageNumber=[];
    for(let i=1;i<Math.ceil(data.length/10)+1;i++){
pageNumber.push(i);
    }

    return(
        <div style={{display:"flex",flexDirection:"row", width:"40%",textAlign:"center"}}>
            
{ pageNumber.map((value)=><div onClick={()=>PageNum(value)} style={{backgroundColor:"lightblue",margin:"2px",width:"100px",textAlign:"center"}}>{value}</div>)}

           
        </div>
    );

}
export default Pages;