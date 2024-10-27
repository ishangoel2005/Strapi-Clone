import { useState } from 'react'
import './App.css'
import SectionThree from './Components/SectionThree/SectionThree'
import SectionTwo from './Components/SectionTwo/SectionTwo'
import SectionOne from './Components/SectionOne/SectionOne'
import Navbar from './Components/Navbar/Navbar'
import SectionFour from './Components/SectionFour/SectionFour'
import SectionFive from './Components/SectionFive/SectionFive'
import EndSection from './Components/EndSection/EndSection'

function App() {

  return (
    <>
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <EndSection/>
    </>
  )
}

export default App
