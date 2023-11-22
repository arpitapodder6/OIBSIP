import React from 'react'
import './project.css'
import noteit from '../../Assets/noteit.png'
import donateblood from '../../Assets/donateblood.png'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    

  return (
    <section id ='projects'>
        <h2 className='projectsTitle'>Projects</h2>
        {/* <div className='projectsImgs'> */}
        <Slider {...settings}>
          <div>
            <img src={noteit} alt='' className='projectImg'/>
            </div><div>
            <img src={donateblood} alt='' className='projectImg'/>
        </div>
        </Slider>
    </section>
  )
}

export default Projects