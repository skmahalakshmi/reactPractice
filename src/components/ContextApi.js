import React from 'react';
import {createContext,useState} from 'react';
import Count from './Count';
import ContextDisplay from './ContextDisplay';
export const store=createContext();
const ContextApi=()=>{
    const [data,setData]=useState([

        {
            brandname:"Nokia"
        },
        {
            brandname:"Realme"
        },
        {
            brandname:"mi"
        }
    ]);
    return(
        <div>
            <h3>Welcome To Context Api example</h3>
            <store.Provider value={[data,setData]}>
            
            <Count/>
            <ContextDisplay/>
            </store.Provider>
        </div>
    );
}
export default ContextApi;