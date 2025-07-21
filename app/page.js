import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedListings from './components/FeaturedListings'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedListings/>
      <Footer/>
    </div>
  )
}

export default page
