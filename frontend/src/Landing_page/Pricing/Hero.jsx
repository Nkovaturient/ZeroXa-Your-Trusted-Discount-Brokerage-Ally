import React from 'react'

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div style={{lineHeight: '1.2cm'}} className='row mt-5 text-center p-5'>
      <h1>Pricing</h1>
      <h5 className='text-muted mt-4 fs-4'>Free equity investments and flat ₹20 intraday and F&O trades</h5>
    </div>
    <div className="row mt-5 text-muted text-center">
      <div className="col-4 p-4">
      <img src="media/images/pricingEquity.svg" alt="free equity" />
      <h1  className='fs-2'>Free equity delivery</h1>
      <p className=' mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 p-4">
      <img src="media/images/intradayTrades.svg" alt="trades" />
      <h1 className='fs-2'>Intraday and F&O trades</h1>
      <p className=' mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-4 p-4">
      <img src="media/images/pricingMF.svg" alt="pricing mf" />
      <h1 className='fs-2'>Free direct MF</h1>
      <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>

    </div>
    </div>
  )
}

export default Hero