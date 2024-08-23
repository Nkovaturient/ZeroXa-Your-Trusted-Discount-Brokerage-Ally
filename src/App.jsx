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
import PageNotFound from './Landing_page/PageNotFound.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Landing_page/Signup/Login.jsx'
import Dashboard from './Landing_page/Dashboard/Dashboard.jsx'
import FirebaseSignup from './Landing_page/Signup/FirebaseSignup.jsx'

const App = () => {
  return (
    <>
    <ToastContainer />
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/firebasignup' element={<FirebaseSignup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App