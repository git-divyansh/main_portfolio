import React from 'react'
import "./WorkCard.css"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img className='card-image' src = {props.imgsrc} alt = "image"></img>
      <h2 className='proj-title'>{props.title}</h2>
      <div className='proj-details'>
          <p>{props.description}</p>
          <div className='proj-btn'>
            <NavLink to={props.view} className="btn">View Button</NavLink>
            <NavLink to={props.source} className="btn">Source Button</NavLink>
          </div>
      </div>
    </div>
  )
}

export default WorkCard