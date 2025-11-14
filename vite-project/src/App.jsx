import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Home.jsx';
import About from './components/About.jsx';
import Art from './components/Vision.jsx';
import Menu from './components/Divisions.jsx';
import Contact from './components/Contact.jsx';


gsap.registerPlugin(ScrollTrigger, SplitText); 

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <About />
        <Art />
        <Menu />
        <Contact />
    </main>
  )
}

export default App