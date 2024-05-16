import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-gradient-to-b from-neutral-700 via-sky-500 to-indigo-600">
        <Navbar />
        <Hero />
        <About />
        <Experience  />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
