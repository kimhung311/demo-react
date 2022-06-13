import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BsBookHalf} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageRoundedDots} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
        <a href="#"><AiTwotoneHome/></a>
        <a href="#about"><FiUser/></a>
        <a href="#experience"><BsBookHalf/></a>
        <a href="#services"><RiServiceFill/></a>
        <a href="#contact"><BiMessageRoundedDots/></a>
    </nav>

    
  )
}

export default Nav