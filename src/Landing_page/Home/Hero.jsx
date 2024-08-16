import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center"> 
        <img src="media/images/homeHero.png" className='mb-5' alt="HeroImg" />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-3' style={{width: '20%', margin: '0 auto', fontWeight: '600'}}>Sign up now</button>
      </div>
    </div>
  )
}

export default Hero