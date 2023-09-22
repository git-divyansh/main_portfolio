import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import PersonSecond from "../Component/PersonSecond.js"
import Form from '../Component/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PersonSecond 
        heading={"Contact"}
        text={"Lets have a chat!"}
      />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact