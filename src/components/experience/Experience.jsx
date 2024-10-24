import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
            </div>
          </div>
          {/*End of Frontend*/}   

          <div className='experience__backend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>Firebase</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              {/* <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>Spring Boot</h4>
                  <small className='text-light'>Intermediary</small>
                </div>
              </article>               */}
            </div>
          </div>         
          
        </div>
    </section>
  )
}

export default Experience
