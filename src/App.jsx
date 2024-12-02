import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Testimonial from './components/Testimonial/Testimonial'
import Who from './components/Who/Who'
import Testimonial2 from './components/Testimonial/Testimonial2'
import Talleres from './components/Talleres/Talleres'
import Testimonial3 from './components/Testimonial/Testimonial3'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import AOS from 'aos';
import "aos/dist/aos.css"



const App = () => {

  useEffect (() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh()
  }, []);

  return  <main className='overflow-x-hidden bg-white dark:bg-black'>

    <Navbar />
    <Home />
    <Testimonial />
    <Who/>
    <Testimonial2 />
    <Talleres/>
    <Testimonial3 />
    <Contacto/>
    <Footer/>
    <FloatingButtons/>
    </main>
}

export default App