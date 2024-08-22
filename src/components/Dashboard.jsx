import React from 'react'
import WatchList from './WatchList'
import { Route, Routes } from 'react-router-dom'
import Summary from './Summary'
import Apps from './Apps'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'

const Dashboard = ({url}) => {
  return (
    <div className="dashboard-container">
     <div className="content">
     <Routes>
        <Route exact path='/' element={<Summary/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/holdings' element={<Holdings url={url}/>}/>
        <Route path='/positions' element={<Positions url={url} />}/>
        <Route path='/funds' element={<Funds/>}/>
        <Route path='/apps' element={<Apps/>}/>
      </Routes>
     </div>

     <WatchList/>
    </div>
  )
}

export default Dashboard