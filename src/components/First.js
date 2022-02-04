import React from 'react';
import Second from './Second';
export default class First extends React.Component{
    state={
        user:"maha",
        name:"chandu"
    }
    render(){
        return(
            <div>
                <h1>Data from first compoenent</h1>
                <Second name={this.state.name}/>
               
                </div>
        );
    }
}