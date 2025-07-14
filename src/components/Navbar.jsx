import React, { useState } from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => {
    return (
      <>
        {navLinks.map(({ id, href, name }) => {
          return (
            <li key={id} className="nav-li list-none ">
              <a key={id} href={href} className="nav-li_a">
                {name}
              </a>
            </li>
          );
        })}
      </>
    );
  };
  const handleMenuClick = () => {
    setIsOpen((handleMenuClickK) => !handleMenuClickK);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl max-auto ">
        <div className="flex mx-auto items-center justify-between py-5 c-space">
          <a
            className="text-white/65 font-bold text-2xl hover:text-white transition-colors font-generalsans"
            href="/"
          >
            Akshay
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            onClick={handleMenuClick}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <ul className="nav-ul ">
              <NavItems />
            </ul>
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
