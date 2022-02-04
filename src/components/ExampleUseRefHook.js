import React,{useRef,useEffect} from 'react';
const ExampleUseRefHook=()=>{
    const data=useRef(null);
    const submit=(e)=>{
e.preventDefault();
console.log(data.current.value);

    }     
    useEffect(()=>{
        data.current.focus();

    },[])
    return(

        <div>         
            <h1>Welcome to useRef Hook Demo</h1>
            <form onSubmit={submit}>
            <input ref={data} type="text" placeholder='enter the name'></input>            
            <input type="submit"></input>
            </form>

        </div>
    );
}
export default ExampleUseRefHook;