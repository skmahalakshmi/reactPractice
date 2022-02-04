import React from 'react';
import {useState} from 'react';
const Calculator=()=>{
    const [input,setInput]=useState("");
    const [results,setResults]=useState("");
    const submit=(e)=>{
        e.preventDefault();
    }
    const handler=(e)=>{
        setInput(e.target.value);
    }
    const result=()=>{
setResults(eval(input));
    }
    
    return(
        <div style={{textAlign:"center"}}>
<h1 style={{backgroundColor:"grey",textAlign:"center"}}>Welcome to Calculator app</h1>
        <form onSubmit={submit}>
<input type="text" placeholder="Enter the expressions" value={input} onChange={handler}></input><br></br>

<button onClick={result}>Result</button><br></br>
<p>Result is :{results}</p>
<button onClick={()=>setInput(input+'1')}>1</button>
<button onClick={()=>setInput(input+'2')}>2</button>
<button onClick={()=>setInput(input+'3')}>3</button>
<button onClick={()=>setInput(input+'4')}>4</button>
<button onClick={()=>setInput(input+'5')}>5</button><br></br>

<button onClick={()=>setInput(input+'6')}>6</button>
<button onClick={()=>setInput(input+'7')}>7</button>
<button onClick={()=>setInput(input+'8')}>8</button>
<button onClick={()=>setInput(input+'9')}>9</button>
<button onClick={()=>setInput(input+'0')}>0</button><br></br>

<button onClick={()=>setInput(input+'+')}>+</button>
<button onClick={()=>setInput(input+'-')}>-</button>
<button onClick={()=>setInput(input+'*')}>*</button>
<button onClick={()=>setInput(input+'/')}>/</button>
<button onClick={()=>setInput(input+'%')}>%</button><br></br>
<button onClick={()=>setInput(" ")}>CLR</button>



        </form>
        </div>
    );
}
export default Calculator;