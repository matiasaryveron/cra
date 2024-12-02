import React from 'react'
import Local from "../../assets/Local.jpg"

const Home = () => {
  return (
    <>
      <div id="INICIO" className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
        <div className='container min-h-[700px] flex relative'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10'>

            <div className='order-2 sm:order-1 space-y-5 lg:pr-20'>
              <h1  data-aos="fade-up"  data className='text-4xl font-semibold'>
                {" "}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-secundary to-primary'>
                  REPUESTOS Y ACCESORIOS CHEVROLET
                </span>{" "}
                ORIGINALES Y ALTERNATIVOS DE EXCELENTE CALIDAD
              </h1>
              <p data-aos="fade-up"  data-aos-delay= "300">
                Ofrecemos una amplia gama de repuestos y accesorios Chevrolet, con envío a todo el país y opciones de financiamiento en cuotas fijas, asegurando calidad y confiabilidad en cada producto.
              </p>
              <div className='flex gap-6'>
                <button data-aos= "fade-up" data-aos-delay="200" className='primary-btn text-black'>Contactenos</button>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-offset="0" className='order-1 sm:order-2'>
              <img 
                src={Local} 
                alt="local" 
                className='max-w-full max-h-[500px] object-contain rounded-md ' 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
