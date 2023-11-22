import React from 'react'
import'./intro.css'
import profile from '../../Assets/profile-pic.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hi,</span>
           <span className='introText'>I'm <span className='introName'>Arpita</span> <br/> Full-stack Developer</span>
           <p className='introPara'>I am a full-stack developer based in India. 
           I have great <br/> interest in Data Structure and Algorithm, cyber security<br/> and everything in-between.</p>
           <Link href='https://docs.google.com/document/d/1lANrMc2pICzsQYRRErDfOouUNtXdJqv4HefqkGHWEnc/edit?usp=sharing'><button className='btn'>Resume</button></Link>
        </div>
        <img src= {profile} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro