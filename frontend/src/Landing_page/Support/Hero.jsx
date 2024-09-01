import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid mb-5 p-5' id='supportHero'>
      <div className="p-5" id='supportWrapper'>
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row" style={{ color: '#fff' ,marginLeft: '13.45rem'}}>
        <div className="col-6">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input className='p-3 mt-4'  type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' />
          <div className='mb-5 mt-3' id='supportLinks'>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a> <br />
          <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-8">
          <h4>Featured</h4>
          
          <ul className='mb-5 mt-3' id='supportLinks'>
            <li><a href="">Surveillance measure on scrips - August 2024</a></li>
            <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
          </ul>
         
        </div>
      </div>
    </section>
  )
}

export default Hero