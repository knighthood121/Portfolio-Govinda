import React from 'react'
import './about.css';
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/Govinda.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Come and meet me</h5>
      <h2>About me</h2>


      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Year of operation</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Diverse Customers</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projets</h5>
              <small>+10 complete projects</small>
            </article>
          </div>

          <p>
          I started my career as a computer science engneer at the
           Goggle Devloper Student club (GDSC). This was a great 
           experience, as I developed skills such as public speaking,
            and also improved my network, learned several stacks such 
            as HTML, CSS, JavaScript, Bootstrap, React, Java, MySQL,
             MongoDB and other Front-End and back-end technologies.
              The whole experience led me to fall in love with a career
               where I can immerse myself in technology and have 
               sensitivity, make positive social impacts on the world.
          </p>

          <a href='#contact' className='btn btn-primary'>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About
