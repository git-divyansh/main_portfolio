import React from 'react'
import {Link} from "react-router-dom"
import person1 from "../Assests/image1.jpg"
import "./PersonFirst.css";
import FirstPageAnimation from './FirstPageAnimation';

const PersonFirst = () => {
  return (
    <div className='person-first'>
      <div className='mask'>
        <img className='intro-img'
          src= {person1}
          alt='Intro'
        />
      </div>
      <div className='content'>
        <p>HI,  I'M A DIVYANSH.</p>
        <h1>WEB DEVELOPER.</h1>
        <div>
          <Link to="/Project"
            className='btn'
          >Projects</Link>
          <Link to="/Contact"
            className='btn btn-light'
          >Contact</Link>
        </div>
      </div>
      <FirstPageAnimation />
    </div>
  )
}

export default PersonFirst