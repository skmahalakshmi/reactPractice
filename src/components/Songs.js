import React from 'react';
const Songs=({card})=>{
return(

    <div>
        <div className='row'>
            {
                card.map(song=>{
                    return(
                   <div className='col-md-3' key={song.id}>
                       <div className='card' style={{width:"17.5rem"}}>
<img src={song.img} className='card-img-top' alt={song.title}></img>
<div
    className="card-body">
        <h5 className='card-title'>{song.title}-{song.movie}</h5>
        <audio controlssrc={song.song}></audio>
</div>
                       </div>
                   </div>     
                    )
                })
            }
        </div>

    </div>
);
}
export default Songs;