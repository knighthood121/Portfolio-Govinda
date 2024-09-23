import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { SiLeetcode } from "react-icons/si";





const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/govinda-kumar-gk' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/knighthood121' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/govinda_space/' target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href='https://leetcode.com/u/knighthood8956/' target="_blank" rel="noreferrer"><SiLeetcode /></a>
        


    </div>
  )
}

export default HeaderSocials