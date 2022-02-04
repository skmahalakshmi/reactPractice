import React,{Component} from 'react';
export default class Register extends Component{
    constructor(props){
        super();
        this.state={
            user:"",
            pass:""
        }
    }
    


    render(){
        const checkdata=(e)=> {
            e.preventDefault();
            if(this.user=="maha" && this.pass=="maha"){
                alert("valid users")
            }
            else{
                alert("wrng entry");
            }
        }
        function display(){
            <p>{this.state.user}</p>
        }
        
        return (
            <div>
                <h1> Registration page</h1>
                <form onSubmit={checkdata}>
                <input type="text" 
                className="input"
                value={this.user} 
                onChange={(e)=>{
                    this.user=e.target.value
                }}
                placeholder='Enter the username'></input><br></br>

                <input type="password"
                className="input"
                 onChange={(e)=>{
                    this.pass=e.target.value
                }}
                value={this.pass} placeholder='Enter the password'></input>  <br></br>    
                <button type="submit"onClick={display} className="btn">Submit</button>
                </form>
                
          </div>
            
        );
       
    }
}
