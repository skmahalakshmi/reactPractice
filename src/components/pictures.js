import React from "react";
export default function Pictures({data}){
    return(
        <div className="row">
            {data.map((image)=>
            <div key={image.id}>
<div className="main">
<img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
width="250"
height="200"
></img>

</div>

            </div>)}



        </div>
    );
}