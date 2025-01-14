import React from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

function FloatingButtons() {
return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center gap-2 z-10">
    <a
        href="https://wa.me/5491133320582?text=Hola%20%F0%9F%91%8B%2C%20te%20contacto%20desde%20la%20p%C3%A1gina%20web%2C%20quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors duration-300"
    >
        <FaWhatsapp size={30} />
    </a>
    <Link
        to="BARRA"
        smooth={true}
        duration={500} 
        className="bg-gray-700 p-3 rounded-full shadow-lg text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
    >
        <FaArrowUp size={30} />
    </Link>
    </div>
);
}

export default FloatingButtons;