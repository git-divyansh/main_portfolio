import React from 'react'
import Navbar from '../Component/Navbar'
import PersonFirst from '../Component/PersonFirst'
import Footer from '../Component/Footer'

const Home = () => {
  return (
      <div style={{width: "100%"}}>
        <Navbar />
        <PersonFirst />
        <Footer />
      </div>
  )
}

export default Home