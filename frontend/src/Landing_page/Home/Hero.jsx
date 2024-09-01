import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate=useNavigate();

  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center"> 
        <img src="media/images/homeHero.png" className='mb-5' alt="HeroImg" />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button onClick={()=> navigate('/signup')} className='btn btn-primary p-3' style={{width: '20%', margin: '0 auto', fontWeight: '600'}}>Sign up now</button>
      </div>
    </div>
  )
}

export default Hero