import React from 'react';
import { useParams } from 'react-router-dom';
const Dashboard=()=>{
    const { name } = useParams();
    const arr=["apple","mango","sapota"]
    return(
        <div>
            <h1>Welcome to Dashboard page</h1>
            <div>
                <h4>Dashboard profile name using path params :{name} is done  </h4>
              {
                  arr.map(
                      (value,index)=>
                      <p key={index}>{value}</p>
                  )
              }
              
           </div>
        </div>
    );
}
export default Dashboard;