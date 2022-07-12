import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asset/me.png'
// import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
    <h5>Hello I am</h5>
    <h1>Lanre</h1>
    <h5 className="text-light"> Front-End Developer</h5>
    <CTA />
    <div className="me">
      <img src={ME} alt="self" />
    </div>
    <a href="#contact" className='scroll__down' >scroll down</a>

    </div>
    </header>
  )
}

export default Header