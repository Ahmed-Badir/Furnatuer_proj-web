import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Heroo from './Heroo'
import Choose from './Choose'
import Untreeco from './Untreeco'
import Testslider from './Testslider'
import ScrollToTop from 'react-scroll-to-top'
function Allabout() {
  return (
    <div>
        <Navbar/>
        <Heroo/>
        <Choose/>
        <Untreeco/>
        <Testslider/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}
export default Allabout