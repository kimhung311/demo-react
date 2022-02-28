import React from 'react'
import CV from '../../assets/cv.pdf'
import 'bootstrap/dist/css/bootstrap.min.css';

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn ml-4"> Download</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA