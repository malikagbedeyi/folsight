import React from 'react'
import '../../assets/scss/style.scss'
import MainBody from '../MainBody'
import LearnMore from '../LearnMore'
import MiddleCover from '../MiddleCover'
import Pricings from '../Pricings'
import Footer from '../Footer'
import Header from '../Header'

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
