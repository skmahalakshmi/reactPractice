import React from 'react';
import { Component } from 'react';
export default class Second extends Component{
    

    
    render(){
       
        return(
           
            <div>
                <h2 style={{color:"red",backgroundColor:"pink",textAlign:"center"}}>Data from second component</h2>
                <p>name of the user is {this.props.name}</p>
            </div>
        );
    }
} 