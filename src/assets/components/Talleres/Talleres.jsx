import React from 'react';
import Taller1 from '../../../assets/Taller1.png';
import Taller2 from '../../../assets/Taller2.jpeg';
import Taller3 from '../../../assets/Taller3.jpeg';
import Taller4 from '../../../assets/Taller4.jpg';

const Talleres = () => {
  const talleres = [
    { src: Taller1, alt: 'Taller 1', desc: 'Cristian Requena - Mecánica integral - 11-4578-0354', aosDelay: '200' },
    { src: Taller2, alt: 'Taller 2', desc: 'Claudio Bielecki - Mecánica integral - 11-6937-8893', aosDelay: '300' },
    { src: Taller3, alt: 'Taller 3', desc: 'Marcelo Nogoya - Mecánica integral - 11-4428-5566', aosDelay: '400' },
    { src: Taller4, alt: 'Taller 4', desc: 'Taller Terce - Chapa y pintura - 11-5958-4483', aosDelay: '500' },
  ];

  return (
    <div id='TALLERES' className="py-12 dark:bg-black dark:text-white flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl sm:text-4xl font-semibold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secundary to-primary">
              TALLERES RECOMENDADOS
            </span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="500" className="mt-4 text-base sm:text-lg text-gray-300">
            Repuestos CRA te recomienda los mejores talleres de la zona, donde podrás encontrar excelentes profesionales que garantizan la óptima reparación de tu auto.
          </p>
        </div>
        {/* Sección para pantallas grandes */}
        <section className="hidden lg:flex gap-4 text-center">
          {talleres.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-md shadow-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p >{item.desc}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {talleres.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-md shadow-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p data-aos="fade-up" data-aos-delay="500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talleres;
