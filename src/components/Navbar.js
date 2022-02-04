import React from 'react';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <div>
         
  <ul>
  <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/dashboard">Dashboard</Link>  
        </li>  
        <li>  
          <Link to="/contact">Contact Us</Link>  
        </li> 
        <li>  
          <Link to="/gallery">Gallery App</Link>  
        </li>  
        <li>   
          <Link to="/timer">Timer App</Link>  
        </li> 
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to='/calculator'>Calculator</Link></li>
        <li><Link to="/todo">TodoApp</Link></li>
        <li><Link to="/fetchapi">Fetch API</Link></li>
        <li><Link to="/pagination">Pagination</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/contexthook">Context Hook example</Link></li>
        <li><Link to="/redux">Redux</Link></li>
        <li><Link to="/lifecycle">React class Lifecycle</Link></li>
        <li><Link to="/materialui">Material examaple</Link></li>
        <li><Link to="/download">Download in react js </Link></li>
        <li><Link to="/email">Email in react js </Link></li>
        <li><Link to="/searchfilter">Search Filter App</Link></li>
        <li><Link to="/useref">use Ref Hook Example</Link></li>
        <li><Link to="/contextapi">context api example</Link></li>
        <li><Link to="/hocmain">HOC example</Link></li>
        <li><Link to="/music">Music App</Link></li>
        <li><Link to ="/movie">Movie App</Link></li>
        
  </ul>
        </div>
    );
}
export default Navbar;