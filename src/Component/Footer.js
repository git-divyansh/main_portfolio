import React from 'react'
import "./Footer.css"
import {FaHome, FaPhone, FaLinkedin, FaMailBulk, FaInstagramSquare} from "react-icons/fa"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome 
                        size = {20}
                        className='footer-icon'
                        style = {{color: "#fff", marginRight: "2rem"}}
                    />
                    <div>
                        <p>Dehradun,</p>
                        <p>Uttarakhan</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone
                        size = {20}
                        className='footer-icon'
                    /><a href='tel:+91 8909472419'>+91 8909472419</a></h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk
                        size = {20}
                        className='footer-icon'
                    /><a href='mailto:divyanshwork2022@gmail.com'>divyanshwork2022@gmail.com</a></h4>
                </div>
            </div>
            <div className='right'>
                <h4>About</h4>
                <p>I work closely with designers, project managers, and other developers to ensure that the application has meet all requirements and specifications.</p>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/divyansh-gusain-62294921b/"><FaLinkedin 
                        size = {20}
                        style = {{color: "#fff", marginRight: "2rem"}}
                        />
                    </a>
                    <a href="https://www.instagram.com/trackk_pad/"><FaInstagramSquare 
                        size = {20}
                        style = {{color: "#fff", marginRight: "2rem"}}
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer