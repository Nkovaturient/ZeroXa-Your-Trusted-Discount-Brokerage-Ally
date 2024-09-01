import React from 'react'

const CreateTicket = () => {
  return (
    <div className='container'>
      <div className="row mt-5 mb-5">
        <h1 className='text-muted fs-2'>To create a ticket, select a relevant topic</h1>
      </div>
      <div className="row">
      <div className="col-4">
        <h4 className='fs-4'><i className="fa-solid fa-circle-plus"></i> Account Opening</h4>
        <ul className="mt-4 fs-5" style={{ color: '#387ED1', lineHeight: '1.8'  ,listStyleType: 'none' }}>
        <li>Getting Started</li>
        <li>Online </li>
        <li>Offline </li>
        <li>Charges </li>
        <li>Company, Partnership and HUF </li>
        <li>Non Resident Indian(NRI)</li> 
      </ul>
      </div>
      <div className="col-4">
        <h4 className='fs-4'><i className="fa-solid fa-user"></i> Your Zerodha Account</h4>
        <ul className="mt-4 fs-5" style={{ color: '#387ED1', lineHeight: '1.95'  ,listStyleType: 'none' }}>
        <li>Login credentials</li>
        <li>Your Profile </li>
        <li>Account modification and segment addition </li>
        <li>CMR & DP ID </li>
        <li>Nomination </li>
        <li>Transfer and conversion of shares</li> 
      </ul>
      </div>
      <div className="col-4">
        <h4 className='fs-4'><i className="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
        <ul className="mt-4 fs-5" style={{ color: '#387ED1', lineHeight: '1.95'  ,listStyleType: 'none' }}>
        <li>Trading FAQs</li>
        <li>Kite </li>
        <li>Margins </li>
        <li>Product and order types </li>
        <li>Corporate actions </li>
        <li>Kite features</li> 
      </ul>
      </div>
      </div>

      <div className="row mt-5 mb-5 ">
      <div className="col-4">
        <h4 className='fs-4'><i className="fa-solid fa-credit-card"></i> Funds</h4>
        <ul className="mt-4 fs-5" style={{ color: '#387ED1', lineHeight: '1.8'  ,listStyleType: 'none' }}>
        <li>Fund withdrawal</li>
        <li>Adding funds </li>
        <li>Adding bank accounts </li>
        <li>eMandates </li> 
      </ul>
      </div>
      <div className="col-4">
        <h4 className='fs-4'><i className="fa-brands fa-gg-circle"></i> Console</h4>
        <ul className="mt-4 fs-5" style={{ color: '#387ED1', lineHeight: '1.95'  ,listStyleType: 'none' }}>
        <li>IPO</li>
        <li>Portfolio </li>
        <li>Funds statement </li>
        <li>Profile </li>
        <li>Reports </li>
        <li>Referral program</li> 
      </ul>
      </div>
      <div className="col-4">
        <h4 className='fs-4'><i className="fa-solid fa-coins"></i> Coin</h4>
        <ul className="mt-4 fs-5" style={{ color: '#387ED1', lineHeight: '1.95'  ,listStyleType: 'none' }}>
        <li>Understanding mutual funds and coin</li>
        <li>Coin app </li>
        <li>Coin web</li>
        <li>Transactions and reports </li>
        <li>National Pension Scheme(NPS) </li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default CreateTicket