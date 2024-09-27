import React from 'react'
import Navbar from './components/navbar/Navbar'
import RestaurantCardList from './components/restaurant/Restaurant'
import Footer from './components/footer/Footer'


const Restaurant = () => {
  return (
    <>
      <Navbar/>
      <RestaurantCardList/>
      <Footer/>
    </>
  )
}

export default Restaurant;
