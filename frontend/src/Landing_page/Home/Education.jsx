import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="education" />
        </div>
        <div className="col-6 p-5">
          <h1 className='mb-2 fs-2'>Free and Open market education</h1>
          <p className='text-muted mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <div className='mt-2 mb-4'>
            <a href="#" style={{textDecoration: 'none'}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          
          <p className='text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <div>
            <a href="#" style={{textDecoration: 'none'}}>TradingQnA <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education