import './App.css'

import Hamburger from './components/Hamburger/Hamburger'
import Intro from './components/Intro/Intro'
import AboutTeacher from './components/AboutTeacher/AboutTeacher'
import Learning from './components/Learning/Learning'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import LeadMagnet from './components/LeadMagnet/LeadMagnet'

function App() {
  return (
    <div className="container mx-auto mb-8 px-8 overflow-x-hidden">
      {/* <LeadMagnet /> */}
      <Hamburger />
      <Intro />
      <Learning />
      <Pricing />
      <AboutTeacher />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
