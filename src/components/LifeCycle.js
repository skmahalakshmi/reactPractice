import React from 'react';
export default class Lifecycle extends React.Component{
     

   constructor(props){
       super(props);
       this.state={
           show:true,
           count:0

       }
   }
   delete=()=>{
this.setState({show:false})
   }
   componentDidMount(){
       console.log("componentDidMount method");
   }
   componentDidUpdate(){
    console.log("componentDidUpdate method");
   }
    render(){
        let myheader;
        if(this.state.show){
            myheader=<Child/>
        }
        return(
            <div>
                <h1>Welcome to Class based Components</h1><br></br>
                {myheader}
                <button onClick={this.delete}>Delete Header</button>
                <h3>Count is :{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>

            </div>
        );
    }

}
class Child extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount method is invoked")
    }
    render(){
        return(
            <h2>Hello World</h2>
        );
    }
}
