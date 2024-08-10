import React from 'react'
import './Hero.css'
 import profile_img from '../../assets/priyanshu-img.jpg';
 import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
         <img src={profile_img} alt="priyanshu-img" style={{borderRadius:"50%"}} /> 
        <h1>  <span>My  Name is Priyanshu Dubey, I am a Frontend Developer.</span></h1>
        <p>I Have Good Knowledge Of Frontend Technology & I am Fresher & Looking For Job in Reputed Company.</p>
        <div className="hero-action">
             <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div> 
             <a href="/Priyanshu-Dubey.pdf" download='Priyanshu-Dubey.pdf' className='hero-resume'>My Resume</a> 
        </div>
      
    </div>
  )
}

export default Hero
