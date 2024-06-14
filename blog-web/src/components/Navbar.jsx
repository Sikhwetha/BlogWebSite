import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Models from "./Models";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isopenmodel,setIsopenmodel] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //navitems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/service", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blogs" },
    { path: "/Contact", link: "Contact" },
  ];

  // model deatails
  const openModel = ( )=>{
    setIsopenmodel(true)
}

  const closeModel = ( )=>{
    setIsopenmodel(false)
}
  return (
    <header className="bg-black fixed z-20 top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white   ">
          Perspective<span className="text-orange-500">Ponder</span>
        </a>

        {/* navitems for lg device   */}
        <ul className="md:flex gap-11 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <li className="text-white" key={index}>
              <NavLink
               className={({ isActive, isPending }) =>
                 isActive
                   ? "active"
                   : isPending
                   ? "pending"
                   : ""
               }
              to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}

        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="https://www.facebook.com/mulanga.sikhwetha.7" className="hover:text-orange-600">
            <BsFacebook />{" "}
          </a>
          <a href="https://x.com/BlenderModeling" className="hover:text-orange-600">
            <IoLogoTwitter />{" "}
          </a>
          <a href="https://www.instagram.com/sikhweth_mulanga/" className="hover:text-orange-600">
            <FaInstagram />{" "}
          </a>

          {/* <button onClick={openModel} className="bg-green-500 px-4 py-2 font-medium rounded hover:bg-orange-500 hover:text-green-400 transition-all duration-200 ease-in">
            Log in
          </button> */
          }
        </div>

        {/* our model */}
        <Models isOpen={isopenmodel} onclose={closeModel}/>

        {/* mobile menu display mobile screen */}

        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="text-white w-5 h-5" />
            ) : (
              <FaBars className="text-white w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      <div>
        <ul
          className={`md:hidden gap-11 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-in-out duration-200"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }, index) => (
            <li className="text-black" key={index}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
