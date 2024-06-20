import React from 'react'
import "./WorkCard.css"
import { NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <LazyLoadImage className='card-image' src = {props.imgsrc} alt = "Card"></LazyLoadImage>
      <h2 className='proj-title'>{props.title}</h2>
      <div className='proj-details'>
          <p>{props.description}</p>
          <div className='proj-btn'>
            <NavLink to={props.view} className="btn">Visit</NavLink>
            <NavLink to={props.source} className="btn">Source</NavLink>
          </div>
      </div>
    </div>
  )
}

export default WorkCard