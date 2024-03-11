import React from 'react'
import "./WorkCard.css"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img className='card-image' src = {props.imgsrc} alt = "Card"></img>
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