import React, { useState } from 'react'
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [subject, setsubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onclickClear = () =>{
    setName("");
    setEmail("");
    setMessage("");
    setsubject("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9l0t95', 'template_4ye3p1d', e.target, 'SUQRLJ1yAKSGIa1j6')
      .then((result) => {
          console.log(result.text);
          onclickClear();
          alert("Your reponse has been recorded");
      }, (error) => {
          console.log(error.text);
      });
      onclickClear(e)
  };
  

  return (
    <div className='from'>
        <form className = ".contact-form" onSubmit={(e)=>sendEmail(e)}>
            <label>Your Name</label>
            <input type="text" value={name} name="user_name" id="name" onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} name="user_email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Subject</label>
            <input type="text" value={subject} name="user_subject" id="subject" onChange={(e)=>setsubject(e.target.value)} />
            <label>Message</label>
            <textarea rows={6} 
              name="message" 
              id="message"
              value={message}
              placeholder='Type your message here' 
              onChange={(e)=>setMessage(e.target.value)}
            />
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form