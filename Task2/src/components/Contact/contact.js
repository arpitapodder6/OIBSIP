import React from 'react'
import './contact.css'
import github from '../../Assets/github.png'
import linkedin from '../../Assets/linkedin.png'
import mail from '../../Assets/email.png'

const Contact = () => {
  return (
    <section id='contact'>
     <div className='links'>
       <a href='mailto:arpitapodder06@gmail.com'><img src={mail} alt='mail' className='link' /></a> 
       <a href='https://github.com/arpitapodder6'><img src={github} alt='github'className='link'/></a>
       <a href='https://www.linkedin.com/in/arpitapodder6/'> <img src={linkedin} alt='linkedin'className='link'/></a>
     </div>
     </section>
  )
}

export default Contact