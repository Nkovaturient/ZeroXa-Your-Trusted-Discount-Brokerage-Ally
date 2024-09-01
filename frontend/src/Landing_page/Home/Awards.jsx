import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Awards Image" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in : </p>
          <ul className='row mt-5'>
            <div className="col-6">
            <li>Futures & options</li>
            <li>Stocks & IPOs</li>
            <li>Commodity derivatives</li>
            </div>
            <div className="col-6">
            <li>Direct mutual funds</li>
            <li>Currency derivatives</li>
            <li>Bonds and Govt. Securities</li>
            </div>
            <img src="media/images/pressLogos.png" style={{width: '86%'}} className='mt-5' alt="press" />
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Awards