import React from 'react';
import CompoenentB from './ComponentB'

export const UserContext=React.createContext();
const CompoenentA=()=>{
    return (
        <div>
            <UserContext.Provider value={"data sent using useContext hook"}>
            <CompoenentB/>
            </UserContext.Provider>
           
            </div>
    );
}
export default CompoenentA;