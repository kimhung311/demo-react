import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/happy-person-11545688398rslqmyfw4g.png'
import HeaderSocials from './HeaderSocials'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello Im </h5>
        <h1>Kim Hung</h1>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me image" />
        </div>
        <a href="#cpntract" className="btn btn croll_down">Scroll Down</a>
      </div>
    </header>
    )
}

export default Header