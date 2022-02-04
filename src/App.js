
import React from 'react';
import { BrowserRouter } from 'react-router-dom' 
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact'
import Gallery from './components/gallery';
import TIMER from './components/timer';
import Register from './components/Register';
import First from './components/First';
import Login from './components/Login';
import Todo from './components/Todo';
import Calculator from './components/Calculator';
import Examplefetch from './components/Examplefetch';
import Pagination from './components/Pagination';
import Quiz from './components/Quiz';
import CompoenentA from './components/ComponentA';
import Redux from './components/Redux'
import Lifecycle from './components/LifeCycle';
import Materialui from './components/Materialui';
import Download from './components/Download';
import Email from './components/Email';
import SearchFilter from './components/SearchFilter';
import ExampleUseRefHook from './components/ExampleUseRefHook';
import ContextApi from './components/ContextApi';
import HocMain from './components/HocMain';
import MusicApp from './components/MusicApp';
import Movie from './components/Movie';




function App() {
 const styles={
    color:"blue",
    backgroundColor:"lightgrey",
    textAlign:"center"
    }
  return (
    <div className="App">
     

      <h1 style={styles}>Welcome To React task</h1>
      <First/>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard/:name" element={<Dashboard />} />   
        <Route path="/gallery" element={<Gallery />} />   
        <Route path="/timer" element={<TIMER />} />   
        <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/fetchapi" element={<Examplefetch/>}/>
        <Route path="/pagination" element={<Pagination/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/contexthook" element={<CompoenentA/>}/>
        <Route path="/redux" element={<Redux/>}/>
        <Route path="/lifecycle" element={<Lifecycle/>}/>
        <Route path="/materialui" element={<Materialui/>}/>
        <Route path="/download" element={<Download/>}/>
        <Route path="/email" element={<Email/>}/>
        <Route path="/searchfilter" element={<SearchFilter/>}/>
        <Route path="/useref" element={<ExampleUseRefHook/>}/>
        <Route path="/contextapi" element={<ContextApi/>}/>
        <Route path="/hocmain" element={<HocMain/>}/>
        <Route path="/music" element={<MusicApp/>}/>

        <Route path="/movie" element={<Movie/>}/>        
        
           </Routes>
     
     </BrowserRouter>
     
     
    </div>
  );
}

export default App;
