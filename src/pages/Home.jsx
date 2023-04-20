import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '../components';

const Home = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <Experience />
        <Tech />
        <div id="work">
          <Works />
        </div>
        <Feedbacks />
        <div className="relative z-0" id="contact">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}

export default Home