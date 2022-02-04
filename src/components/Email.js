import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Email=()=>{
    const form = useRef();
    const submitHandler=(e)=>{

e.preventDefault();
emailjs.sendForm('service_gq5q6wk', 'template_gwazq99', form.current, 'user_wgsA7O18MvQZhd9LLuWZY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return(
        <div>
             <h1>
                 Email js (sending email using react)
             </h1>
             <form ref={form} onSubmit={submitHandler}>
      <label>Subject</label><br></br>
      <input type="text" name="name" placeholder='Subject' /><br></br>
      <label>Email</label><br></br>
      <input type="email" name="email" placeholder='Email'/><br></br>
      <label>Message</label><br></br>
      <textarea name="message" placeholder='Message'/><br></br>
      <input type="submit" value="Send" />
    </form>
        </div>
    );
}
export default Email;