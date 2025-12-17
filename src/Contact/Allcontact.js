import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import ScrollToTop from 'react-scroll-to-top'
import Herocontact from './Herocontact'
import Conform from './Conform'
function Allcontact() {
  return (
    <div>
        <Navbar/>
        <Herocontact/>
        <Conform/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}
export default Allcontact