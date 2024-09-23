import React from 'react'
import './footer.css';
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";


const Nav = () => {
  return (
    <footer>
        

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contato</a></li>
        </ul>

        <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/govinda-kumar-gk' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/knighthood121' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/govinda_space/' target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href='https://leetcode.com/u/knighthood8956/' target="_blank" rel="noreferrer"><SiLeetcode /></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Govinda. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Nav