import React from 'react';
const QuizDisplay=({questions,index,changeHandler})=>{
    const handler=(e)=>{
       let data=questions.answer===e.target.value?1:0;
       changeHandler(data,index);
    }
    return(
        <div>
           
            <h3 style={{border:"1px solid black"}}>{questions.title}</h3>
            <div onChange={handler}>
            <input type="radio" value="A" name={index}></input>{questions.options[0]} &nbsp;
            <input type="radio" value="B" name={index}></input>{questions.options[1]} &nbsp;
            <input type="radio" value="C" name={index}></input>{questions.options[2]} &nbsp;
            <input type="radio" value="D" name={index}></input>{questions.options[3]} &nbsp;
            </div>
        </div>
    );
}
export default QuizDisplay;