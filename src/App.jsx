import React, { useEffect } from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Home from './assets/components/Home/Home'
import Testimonial from './assets/components/Testimonial/Testimonial'
import Who from './assets/components/Who/Who'
import Testimonial2 from './assets/components/Testimonial/Testimonial2'
import Talleres from './assets/components/Talleres/Talleres'
import Testimonial3 from './assets/components/Testimonial/Testimonial3'
import Contacto from './assets/components/Contacto/Contacto'
import Footer from './assets/components/Footer/Footer'
import FloatingButtons from './assets/components/FloatingButtons/FloatingButtons'
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