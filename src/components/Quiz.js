import React from 'react';
import { useState } from 'react/cjs/react.development';
import Questions from '../Questions.json';
import QuizDisplay from './QuizDisplay';
const Quiz=()=>{
    
    let temp=[];
    const [marks,setMarks]=useState([]);
    const changeHandler=(value,index)=>{
        temp=marks;
temp[index]=value;
console.log(temp);
setMarks([...temp]);
    }

    return(
        <div>
            <h2 style={{backgroundColor:"blue",textAlign:"center"}}>
Welcome to Quiz App

            </h2>
            {Questions.map((ques,index)=>
            {
                return( <QuizDisplay questions={ques} index={index} changeHandler={changeHandler} />)
               
            }
           
            )}
            <center>
            <button  style={{backgroundColor:"lightblue",textAlign:"center",width:"700"}} onClick={()=>alert(marks.reduce((a,b)=>a+b,0)+"/10")}>End Quiz</button>
            </center>
        </div>
    );
}
export default Quiz;
