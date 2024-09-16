import React from 'react'
import '../assets/scss/style.scss'
import MainBody from '../Components/MainBody'
import LearnMore from '../Components/LearnMore'
import MiddleCover from '../Components/MiddleCover'
import Pricings from '../Components/Pricings'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
        <Header />
      <MainBody />
      <LearnMore />
      <MiddleCover />
      <Pricings />
      <Footer />
    </div>
  )
}

export default Home
