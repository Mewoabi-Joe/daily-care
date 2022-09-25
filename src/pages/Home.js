import React from "react"
import FirstSection from "../components/FirstSection"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import LabTestSection from "../components/LabTestSection"
import Navbar from "../components/Navbar"
import ServicesSection from "../components/ServicesSection"
import store from "../redux/store"

const Home = ({ setAuth }) => {
  const user = store.getState().auth.user

  if (user) setAuth(true)

  return (
    <main>
      <FirstSection />
      <ServicesSection />
      <LabTestSection />
      <GetInTouch />
      <Footer />
    </main>
  )
}

export default Home
