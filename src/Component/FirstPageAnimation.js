import React from 'react'
import githubImg from "../Assests/github.png"
import leetcodeImg from "../Assests/leetcode.png"
import gfgImg from "../Assests/gfg.png"
// import linkedinImg from "../Assests/linkedin.png"
// import instagramImg from "../Assests/instagram.png"

import Doodle from "../Assests/ProjImage/Doodle.png"
import OutlayManager from "../Assests/ProjImage/OutlyaManager.png"
import Ecommerce from "../Assests/ProjImage/ecommerceLogin.png"

import "./FirstPageAnimation.css"

const FirstPageAnimation = () => {
  return (
    <div className="container">
      <div className="right-content">
      <div className="parallax">
        <img src={Doodle} alt="Image1" className="parallax-image" style={{top: '0%'}} />
        <img src={OutlayManager} alt="Image2" className="parallax-image" style={{top: '30%'}} />
        <img src={Ecommerce} alt="Image3" className="parallax-image" style={{top: '60%'}} />
      </div>
    </div>
    <div className="left-content">
      <h1 className='underline-animation' style={{color : "black"}}>CODING PLATFORM</h1>
      <h3>Ever since I embarked on my journey as a software developer, coding has been a source of fascination for me. By leveraging the following platforms, I have been able to refine my skills and improve my capabilities as a programmer.</h3>
      <div className="floating-icons">
        <a href="https://github.com/git-divyansh/">
          <img src={githubImg} alt="Icon1" className="icon" style={{animationDelay: '0s'}} />
        </a>
        <a href="https://leetcode.com/FishBum/">
        <img src={leetcodeImg} alt="Icon2" className="icon" style={{animationDelay: '2s'}} />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/divyanshdh">
        <img src={gfgImg} alt="Icon3" className="icon" style={{animationDelay: '4s'}} />
        </a>
      </div>
      <div className="animated-words">
        <span className="word" style={{animationDelay: '0s'}}>Awesome</span>
        <span className="word" style={{animationDelay: '1s'}}>Innovative</span>
        <span className="word" style={{animationDelay: '2s'}}>Creative</span>
        <span className="word" style={{animationDelay: '3s'}}>Dynamic</span>
      </div>
    </div>
    
  </div>
  )
}

export default FirstPageAnimation