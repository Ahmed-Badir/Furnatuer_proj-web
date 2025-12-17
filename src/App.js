import React from 'react'
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './Home/Navbar';
import Hero from './Home/Hero';
import Product from './Home/Product';
import Choose from './Home/Choose';
import Help from './Home/Help';
import Popular from './Home/Popular';
import Testimonial from './Home/Testimonial';
import Blog from './Home/Blog';
import Footer from './Home/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Choose />
      <Help />
      <Popular />
      <Testimonial />
      <Blog />
      <Footer/>
      <ScrollToTop />
    </div>
  )
}
export default App;



/* <Cart namee="Nada" last_name="Ossama">
  <h3>lorem5</h3>
  <h2>helloooooo</h2>
  <h2>hiiiiiiiiiiii</h2>
  <h1>omar sdsdghyhg</h1>
  <Product/>----------------->use componant in anther componant
</Cart> */
// type for write a props in react 
