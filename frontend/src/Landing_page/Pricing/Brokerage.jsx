import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className="row mt-5 mb-5 text-muted ">
        <div className="col-9  p-4">
        <a className='offset-3 fs-4' href="#" style={{ color: "rgb(11, 87, 201)" }}>Brokerage Calculator</a>
        <ul className='mt-5' style={{lineHeight: '1.8'}}>
          <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
          <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
          <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
          <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
        </ul>
        </div>
        <div className="col-3 text-center p-4">
          <a className='fs-4' href="#" style={{ color: "rgb(11, 87, 201)" }}>List of Charges</a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage