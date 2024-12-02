import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/Logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';

const NavLink = [
  { id: 1, name: 'HOME', link: 'INICIO' },
  { id: 2, name: 'QUIENES SOMOS', link: 'WHO' },
  { id: 3, name: 'TALLERES RECOMENDADOS', link: 'TALLERES' },
  { id: 4, name: 'CONTACTO', link: 'CONTACTO' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div id="BARRA" className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Repuestos Cra" className="h-16" />
            <p className="text-3xl">
              REPUESTOS <span className="font-bold">CRA</span>
            </p>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLink.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secundary transition-colors duration-500 cursor-pointer"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer text-white"
                size={30}
              />
            ) : (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer text-white"
                size={30}
              />
            )}
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden bg-black text-white absolute top-full left-0 w-full p-4">
            <ul className="flex flex-col items-center gap-4">
              {NavLink.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="text-lg font-semibold hover:text-primary transition-colors duration-500 cursor-pointer"
                    onClick={() => setShowMenu(false)} 
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
