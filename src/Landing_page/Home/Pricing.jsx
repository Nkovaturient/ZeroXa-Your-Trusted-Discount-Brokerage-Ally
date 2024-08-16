import React from 'react'

const Pricing = () => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row">
        <div className="col-4">
          <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
          <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <div>
            <a href="#" style={{textDecoration: 'none'}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-4 p-2 border">
              <h1 style={{color: '#FCB040'}} className='fs-2'><sup style={{fontWeight: '800'}}> &#x20B9; </sup>0</h1>
              <p className='text-muted'>Free account opening</p>
            </div>
            <div className="col-4 p-2 border">
            <h1 style={{color: '#FCB040'}} className='fs-2'><sup tyle={{fontWeight: '800'}}> &#x20B9; </sup>0</h1>
            <p className='text-muted text-center'>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-4 p-2 border ">
            <h1 style={{color: '#FCB040'}} className='fs-2'><sup tyle={{fontWeight: '800'}}> &#x20B9; </sup>20</h1>
            <p className='text-muted'>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing