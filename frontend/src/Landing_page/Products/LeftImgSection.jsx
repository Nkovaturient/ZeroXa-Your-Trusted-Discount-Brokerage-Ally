import React from 'react'

const LeftImgSection = ({img, productName, description, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className='container mt-5'>
      <div className="row mt-5 ">
        <div className="col-4">
          <img src={img} alt={productName} />
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5 mt-5">
          <h1 className='mb-4'>{productName}</h1>
          <p className='text-muted'>{description}</p>
          <div>
          <a style={{color: 'rgb(11, 87, 201)'}} href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
          <a style={{color: 'rgb(11, 87, 201)', marginLeft: '50px'}} href={learnMore}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='mt-3'>
          <a href={googlePlay}> <img src='media/images/googlePlayBadge.svg' alt="gPlay" /></a>
          <a href={appStore} style={{marginLeft: '50px'}}><img src='media/images/appstoreBadge.svg' alt="appStore" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImgSection