import React from "react";
import { MdOutlineWhereToVote } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FeaturesData = [
  {
    name: "WhatsApp",
    icon: (
      <FaWhatsapp className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "https://wa.me/5491133320582?text=Hola%20%F0%9F%91%8B%2C%20te%20contacto%20desde%20la%20p%C3%A1gina%20web%2C%20quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n.", 
    description: "+54 9 11-3332-0582",
    additionalInfo: "¡Contáctanos al instante!",
    aosDelay: "300",
  },
  {
    name: "Instagram",
    icon: (
      <FaInstagram className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "https://www.instagram.com/repuestoscra.villadevoto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    description: "@repuestoscra.villadevoto",
    additionalInfo: "Síguenos para más novedades.",
    aosDelay: "500",
  },
  {
    name: "Ubicacion",
    icon: (
      <MdOutlineWhereToVote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "https://maps.app.goo.gl/EcWrQN9ScBGqNxLt8", 
    description: "Lope de Vega 2960, Capital Federal.",
    additionalInfo: "¡Visítanos hoy mismo!",
    aosDelay: "700",
  },
];

const Features = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <>
      <div id="CONTACTO" className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secundary to-primary"
          >
          CONTACTOS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                onClick={() => handleCardClick(data.link)}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark text-white rounded-lg cursor-pointer duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
                <p className="text-sm text-gray-400">{data.additionalInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
