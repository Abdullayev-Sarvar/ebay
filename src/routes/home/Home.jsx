import React from 'react'
import Banner from '../../components/banner/Banner'
import ProductSlice from '../../components/ProductSlice/ProductSlice'
import Trending from '../../components/trending/Trending'
import TodayDeals from '../../components/todayDeals/TodayDeals'
import Footer from '../../components/footer/Footer'
import Terms from '../../components/terms/Terms'

const Home = () => { 
  return (
    <>
      <Banner />
      <ProductSlice />
      <Trending/>
      <TodayDeals/>
      <Footer/>
      <Terms/>
    </>
  )
}

export default Home