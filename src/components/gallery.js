import React,{useState} from 'react';
import axios from 'axios';
import Pictures from './pictures';

export default function Gallery(){
    const apiKey="636e1481b4f3c446d26b8eb6ebfe7127";
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const handler=(e)=>{
setSearch(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            setData(response.data.photos.photo)
          })
       
    }
    return(
        <div>
            <h3>Gallery Snapshots</h3>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter the text here'
                value={search}
                onChange={handler}
                ></input><br></br>
                <input type="submit"></input>
            </form>
            <br></br>
            {data.length>=1?<Pictures data={data}/>:<h3>No Data</h3>}
            
        </div>
    );
}