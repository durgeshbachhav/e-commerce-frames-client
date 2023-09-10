import React from 'react'
import './Hero.scss'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="hero">
          <div className="hero-content center">
               <h2 className='heading'>Your Vision, Our Frames</h2>
               <p className="subheading">Transforming Spaces with Artistry on a Grand Scale.</p>
               <button onClick={()=>navigate('/category')} className="cta btn-primary">explore more</button>
          </div>
    </div>
  )
}

export default Hero