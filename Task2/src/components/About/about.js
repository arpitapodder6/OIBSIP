import React from 'react'
import './about.css'
import pointer from '../../Assets/arrow.png'

const About = () => {
  return (
   <section id='about'>
     <span className='aboutTitle'>About</span>
     <span className='aboutDetail'>I am currently a 3rd year undergraduate student in Computer Science and Engineering.</span>
     <span className='skillheading'>Here are some of the technologies I have been working with:</span>
     <div className='skillBars'>
      <div className='skillBar'>
       <img src= {pointer} alt='Pointer' className='skillBarImg'/>
        <div className='skill'>React.js</div>
        </div>
        <div className='skillBar'>
       <img src= {pointer} alt='Pointer' className='skillBarImg'/>
        <div className='skill'>C,C++</div>
        </div>
        <div className='skillBar'>
       <img src= {pointer} alt='Pointer' className='skillBarImg'/>
        <div className='skill'>Python</div>
        </div>
        <div className='skillBar'>
       <img src= {pointer} alt='Pointer' className='skillBarImg'/>
        <div className='skill'>JavaScript</div>
        </div>
        <div className='skillBar'>
       <img src= {pointer} alt='Pointer' className='skillBarImg'/>
        <div className='skill'>Java</div>
        </div>
        <div className='skillBar'>
       <img src= {pointer} alt='Pointer' className='skillBarImg'/>
        <div className='skill'>HTML & CSS</div>
        </div>
     </div>
   </section>
  )
}

export default About