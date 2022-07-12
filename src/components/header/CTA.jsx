import React from 'react'
import Lanre from '../../asset/Lanre.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Lanre} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk </a>
    </div>
  )
}

export default CTA