import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import ScrollToTop from 'react-scroll-to-top'
function Allblog() {
  return (
    <div>
        <Navbar/>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Footer/>
        <ScrollToTop translate='1s'/>
    </div>
  )
}
export default Allblog