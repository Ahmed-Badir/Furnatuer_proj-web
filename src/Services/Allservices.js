import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Servehero from './Servehero'
import Servechoose from './Servechoose'
import Serveproduct from './Serveproduct'
import ScrollToTop from 'react-scroll-to-top'
import Testserve from './Testserve'
function Allservices() {
  return (
    <div>
        <Navbar/>
        <Servehero/>
        <Servechoose/>
        <Serveproduct/>
        <Testserve/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}
export default Allservices