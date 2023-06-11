import React from 'react'
import Navbar from '../components/Navbar'
import TitleSection from '../components/TitleSection'
import HeroSection from '../components/HeroSection'
import OurMission from '../components/OurMission'

import Services from '../components/Services'
import QHSE from '../components/QHSE'
import Footer from '../components/Footer'
import GlobalFootprints from '../components/GlobalFootprints'

const Home = () => {
  return (
    <>
    {/* <TitleSection /> */}
     <HeroSection />
    {/* <OurMission /> */}
     {/* <GlobalFootprints />  */}
    <Services />
    {/* <QHSE />  */}
    <Footer/>
    </>
  )
}

export default Home