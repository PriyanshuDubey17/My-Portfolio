import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/logo.svg'
import BlueBirds_logo from '../../assets/favicon.png'
import Galgotias_logo from '../../assets/Galgotias_University.jpg'

const Education = () => {
  return (
    <div id='education' className='education'>
    <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern}alt="" />
    </div>
    <div className="education-content1">
        <img src={BlueBirds_logo} alt="" />
        <h2>V M High School Gopalganj</h2>
        <p>High School</p>
        <p>2017-18</p>
    </div>
    <div className="education-content2">
    <img src={BlueBirds_logo} alt="" />
        <h2>V M Inter College Gopalganj</h2>
        <p>Senior Secondary School</p>
        <p>2018-20</p>
    </div>
    <div className="education-content3">
        <img src={Galgotias_logo} alt="" style={{borderRadius:"50%"}} />
        <h2>Galgotias University</h2>
        <p>Bachelor's of Computer Applications</p>
        <p>2021-24</p>
    </div>

      
    </div>
  )
}

export default Education
