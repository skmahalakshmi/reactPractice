import React from 'react';
import {UserContext} from './ComponentA'
const CompoenentB=()=>{
    return (

        <div>
            <UserContext.Consumer>
                {value=><div>{value}</div>}
            </UserContext.Consumer>
           </div>
    );
}
export default CompoenentB;