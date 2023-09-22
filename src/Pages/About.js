import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import PersonSecond from '../Component/PersonSecond'
import AboutContent from '../Component/AboutContent'
import AboutContentSecond from '../Component/AboutContentSecond'

const About = () => {
  return (
    <div>
      <Navbar />
      <PersonSecond 
        heading={"ABOUT"}
        text={""}
      />
      <AboutContent />
      <AboutContentSecond />
      <Footer />
    </div>
  )
}

export default About