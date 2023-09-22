import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import PersonSecond from '../Component/PersonSecond'
import Work from '../Component/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <PersonSecond 
        heading = "PROJECTS." 
        text = "Some recent work"
      />
      <Work />
      <Footer />
    </div>
  )
}

export default Project