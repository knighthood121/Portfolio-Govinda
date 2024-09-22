import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio09.png'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.jpg'
import IMG12 from '../../assets/portfolio12.jpg'
import IMG13 from '../../assets/portfolio13.jpg'
import IMG14 from '../../assets/portfolio14.jpg'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Admin-Dashboard React.js',
    github: 'https://github.com/knighthood121/Admin-Dashboard',
    demo: 'https://admin-dashboard-mauve-five.vercel.app/',
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Samsan-Tech React.js',
    github: 'https://github.com/knighthood121/samsan-tech',
    demo: 'https://samsan-tech.vercel.app/',
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Resume-Builder React.js',
    github: 'https://github.com/Mardoqueu/insta-v1',
    demo: 'https://resume-builder-b.vercel.app/',
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Todo-List React.js',
    github: 'https://github.com/knighthood121/Todo-List',
    demo: 'https://todo-list-assignment1.vercel.app/',
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Fitness-App React.js',
    github: 'https://github.com/knighthood121/fitness-app',
    demo: 'https://fitness-app-govinda.vercel.app/',
  },
  {
    id: 6, 
    image: IMG6,
    title: 'E-commerce react',
    github: 'https://github.com/knighthood121/Ecommer/tree/main',
    demo: 'https://knighthood-ecommers.vercel.app/',
  },  
  {
    id: 7, 
    image: IMG7,
    title: 'Xcrypto react.js',
    github: 'https://github.com/knighthood121/Xcrypto',
    demo: 'https://knighthood121.github.io/Xcrypto/',
  },
  {
    id: 8, 
    image: IMG8,
    title: 'Portfolio Website',
    github: 'https://github.com/knighthood121/Portfolio-Govinda',
    demo: 'https://portfolio-govinda.vercel.app/',
  },
  {
    id: 9, 
    image: IMG9,
    title: 'Zombi-Game js',
    github: 'https://github.com/knighthood121/ZombiGame',
    demo: 'https://zombi-game.vercel.app/',
  },
  {
    id: 10, 
    image: IMG10,
    title: 'Calendar Html-Css-js',
    github: 'https://github.com/knighthood121/Calendar',
    demo: 'https://calendar-flax-mu.vercel.app/',
  },
  {
    id: 11, 
    image: IMG11,
    title: 'Slide-Puzzle Html-Css-js',
    github: 'https://github.com/knighthood121/Slide-Puzzle',
    demo: 'https://slide-puzzle-livid.vercel.app/',
  },
  {
    id: 12, 
    image: IMG12,
    title: 'Rock-Paper-Scissor Html-Css-js',
    github: 'https://github.com/knighthood121/Rock-Paper-Scissors',
    demo: 'https://rock-paper-scissors-ten-beryl.vercel.app/',
  },
  {
    id: 13, 
    image: IMG13,
    title: 'Car-Racing Html-Css-Js',
    github: 'https://github.com/knighthood121/car-racing',
    demo: 'https://car-racing-ten.vercel.app/',
  },
  {
    id: 14, 
    image: IMG14,
    title: 'Chess Html-Css-Js',
    github: 'https://github.com/knighthood121/chess',
    demo: 'https://chess-taupe.vercel.app/',
  }  
 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio </h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) =>{
              return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
            </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio
