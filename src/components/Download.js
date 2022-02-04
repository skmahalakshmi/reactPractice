import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import pic from '../pic.jfif';
const Download=()=>{
    return(
        <div>
            <h1>Downoad Files in React js </h1>
           
            <img src={pic} width="auto" height="250"></img>
            <Stack spacing={2} direction="row">
     
      <Button variant="contained">Download here</Button>
      <a href={pic} className='btn btn-primary' download="picture">Click here to download</a>
         </Stack>
       

        </div>
    );
}
export default Download;