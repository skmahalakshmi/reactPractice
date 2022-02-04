import React from 'react';
import Hoc from './Hoc';
const HocMain=(props)=>{
    return(
        <div>
            <h1>HOC Example {props.name}</h1>
            
        </div>
    );
}
export default Hoc(HocMain);