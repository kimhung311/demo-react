// Title

import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {BsGoogle} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
        <div className="header_socials">
            <p className="left-col-icon"></p>
            <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="github.com" target="_blank"><VscGithub/></a>
            <a href="google.com" target="_blank"><BsGoogle/></a>
            <a href="facebook.com" target="_blank"><FaFacebookSquare/></a>
        </div>
    )
}
export default  HeaderSocials