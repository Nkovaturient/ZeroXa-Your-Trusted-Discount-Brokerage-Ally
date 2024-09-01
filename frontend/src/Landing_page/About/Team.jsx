import React from 'react'
import Profile from './Profile'

const Team = () => {
  return (
    <div className="container mt-5">
    <div className="row mt-5 p-5 border-top  mb-5">
      <h1
        className="text-muted text-center">
        People
      </h1>
      <div className="row mt-2 mb-5 p-5 " style={{ lineHeight: "0.89cm" }}>
        <Profile img={'media/images/nithinKamath.jpg'} name={'Nithin Kamath'} position={'Founder, CEO'} />
        <div className="col-6 text-muted fs-5 p-5">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="#" style={{color: 'rgb(11, 87, 201)'}}>Homepage / TradingQnA / Twitter </a></p>
        </div>
      </div>

      <div className="row mt-5">
      <Profile img={'media/images/Nikhil.jpg'} name={'Nikhil Kamath'} position={'Co-founder & CEO'} />
      <Profile img={'media/images/Kailash.jpg'} name={'Dr. Kailash Nadh'} position={'CTO'} />
      <Profile img={'media/images/Venu.jpg'} name={'Venu Madhav'} position={'COO'} />
      <Profile img={'media/images/Hanan.jpg'} name={'Hanan Delvi'} position={'CCO'} />
      <Profile img={'media/images/Seema.jpg'} name={'Seema Patil'} position={'Director'} />
      <Profile img={'media/images/karthik.jpg'} name={'Karthik Rangappa'} position={'Chief of Education'} />
      <Profile img={'media/images/Austin.jpg'} name={'Austin Prakesh'} position={'Director Strategy'} />
      </div>
    </div>
  </div>
  )
}

export default Team