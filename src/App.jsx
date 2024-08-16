import React from 'react'
import HomePage from './Landing_page/Home/HomePage'
import AboutPage from './Landing_page/About/AboutPage'
import PricingPage from './Landing_page/Pricing/PricingPage'
import ProductPage from './Landing_page/Products/ProductPage'
import SupportPage from './Landing_page/Support/SupportPage'
import { Route, Routes } from 'react-router-dom'
import Signup from './Landing_page/Signup/Signup'
import Navbar from './Landing_page/Navbar.jsx'
import Footer from './Landing_page/Footer.jsx'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/support' element={<SupportPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App