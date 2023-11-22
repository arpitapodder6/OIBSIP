import React from 'react'
import './navbar.css'
import contact from '../../Assets/contact.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
         <Link activeClass='active' to ='intro' spy ={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>Home</Link>
         <Link activeClass='active' to ='about' spy ={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>About</Link>
         <Link activeClass='active' to ='projects' spy ={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>Projects</Link>
         <Link activeClass='active' to ='contact' spy ={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>Contact</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contact} alt='Contact' className='desktopMenuImg' /><a href='mailto:arpitapodder06@gmail.com'>Say Hi!</a></button>
    </nav>
  )
}

export default NavBar
