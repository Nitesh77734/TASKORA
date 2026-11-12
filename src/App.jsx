
import React, { useState, useEffect, useRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {

  const [showDashboard, setShowDashboard] = useState(false)
  const dashboardRef = useRef(null)

  useEffect(() => {
    if (showDashboard) {
      dashboardRef.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [showDashboard])

  function startFreePlan() {
    setShowDashboard(true)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />

      <Pricing onStartFree={startFreePlan} />

      {showDashboard && (
        <div ref={dashboardRef}>
          <Dashboard />
        </div>
      )}

      <Contact />
      <Footer />
    </>
  )
}
