import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  // const url=`http://localhost:7000`
  const url=`https://zeroxa-backend.onrender.com`;
  return (
    <>
    <Routes>
      <Route path='/*' element={<Home url={url} />} />
    </Routes>
    </>
  )
}

export default App