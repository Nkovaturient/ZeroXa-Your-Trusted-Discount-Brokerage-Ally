import React from 'react'

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input type="text" name='search' id='search'
        className='search'
        placeholder='Search eg:infy, bse,  nifty fut weekly, gold mcx..' />
        <span className="counts">9 / 50</span>
      </div>

      <ul className="list"></ul>
    </div>
  )
}

export default WatchList