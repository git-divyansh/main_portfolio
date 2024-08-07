import React from 'react'
import "./AboutContent.css";
import { Link } from 'react-router-dom';
import image2 from "../Assests/image5.jpg";
import image5 from "../Assests/image2.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutContent = () => {

  return (
    <>
    <div className = "quote">
      <h2>"Minimalism is not a lack of something. It's simply the perfect amount of something."</h2>
    </div>
    <div className='about'>
        <div className='left'>
          <h1>Who am I ?</h1>
          <p>
          As a MERN stack developer, my job is to build modern and scalable web applications using four main technologies: MongoDB, Express, React, and Node.js. I work on both the frontend and backend aspects of the application, using my skills in HTML, CSS, and JavaScript to create a user-friendly and visually appealing interface.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Overall, my job as a MERN stack developer is to build robust and scalable web applications that meet the needs of clients and users. I work closely with designers, project managers, and other developers to ensure that the application meets the requirements and specifications, and is delivered on time and within budget.
          </p>
          <Link to = "/contact">
            <button className='btn'>Contact</button>
          </Link>
        </div>
        <div className='right'>
          <div className='img-container'>
            <div className='img-stack top'>
              <LazyLoadImage src = {image2} className="img" alt = "true"></LazyLoadImage>
            </div>
            <div className='img-stack bottom'>
              <LazyLoadImage src = {image5} className="img" alt = "true"></LazyLoadImage>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutContent