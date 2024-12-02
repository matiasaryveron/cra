import React from 'react'
import who1 from '../../assets/who1.png'

const  Who = () => {
return (
    <div id="WHO" className='py-12 sm:py-0 relative'>
        <div className='container min-h-[620px] flex items-center'>
            <div className='grid
        grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
            <div data-aos="fade-up" data-aos-once="false">
                <img src={who1} alt="" className=' w-full max-w-[400px] ' />
            </div>
            <div className='order-2 sm:order-1 space-y-5 lg:pr-20'>
                <h1  data-aos="fade-up" data-aos-delay="300"  className='dark:text-white text-4xl font-semibold'>
                {" "}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-secundary to-primary'>
                    QUIENES SOMOS
                </span>{" "}
                </h1>
                <p data-aos="fade-up" data-aos-delay="500"  className='dark:text-white'>
                Desde 2013, en Repuestos CRA nos especializamos en la comercialización de repuestos Chevrolet originales y alternativos de alta calidad. Nos destacamos por ofrecer productos confiables que garantizan el rendimiento y la durabilidad de tu vehículo.Ubicados en Villa Devoto, Capital Federal, brindamos atención personalizada para ayudarte a encontrar el repuesto exacto que necesitas, ya sea para mantenimiento, reparación o mejora de tu auto.
                </p>
            </div>
        </div>
        </div>
    </div>
)
}

export default Who