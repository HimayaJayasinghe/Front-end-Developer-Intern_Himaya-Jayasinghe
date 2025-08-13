import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import StrategySection from './components/StrategySection'
import FrequentlyQuestions from './components/FrequentlyQuestions'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <StrategySection />
      <FrequentlyQuestions />
      <Footer />
    </div>
  )
}

export default App
