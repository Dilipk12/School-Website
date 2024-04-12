import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';

import Logo from './Logo'

import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";


function Header() {

  const [isOpen, setIsOpen] = useState(true);

  const menuitems = [
    { path: '/', navtitle: "Home" },
    { path: '/about', navtitle: "About" },
    { path: '/gallery', navtitle: "Gallery" },
    { path: '/contact', navtitle: "Contact" }
  ]

  const ToggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const GotoTopbtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (

    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className='sticky top-5 left-0 rounded-full z-50 flex flex-wrap items-center justify-between w-full bg-white/30 backdrop-blur-md px-10 sm:px-12 py-4'>

      <Logo />

      <div className="flex flex-wrap items-center justify-center ">

        {/* Nav links content */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-10">
          {
            menuitems.map((menuitem, id) => {
              return (
                <NavLink to={menuitem.path} onClick={GotoTopbtn} key={id} style={({ isActive }) => { return isActive ? { color: "#da4a03" } : {} }} className={`text-3xl sm:text-4xl mb-5 md:mb-0 md:text-xl font-semibold text-white md:text-black hover:text-[#da4a03] hover:bg-gray-200 md:hover:bg-transparent hover:px-20 md:hover:px-0 hover:py-2 md:hover:py-0 duration-300`}>
                  <div> {menuitem.navtitle}</div> </NavLink>
              )
            })
          }
          <button className='px-8 py-1 rounded-full bg-black scale-100 hover:scale-110 duration-150 text-slate-100 text-xl font-semibold'>Login</button>
        </div>

        {/* Toggle Menu buttons  */}
        <div

          onClick={ToggleNavbar}
          className="md:hidden block text-3xl font-bold cursor-pointer z-10">
          {
            isOpen ? <HiMenu /> : <RiCloseFill className='text-white' />
          }
        </div>
      </div>

      {/* Toggle Nav  */}
      {
        !isOpen && (
          <div
            className='md:hidden h-screen w-full flex basis-full items-center flex-col justify-center absolute top-1/2 left-0 -mt-12 rounded-3xl bg-black p-10 gap-y-4'>
            {
              menuitems.map((menuitem, id) => {
                return (
                  <NavLink to={menuitem.path} onClick={GotoTopbtn} key={id} className={`text-3xl sm:text-4xl mb-5 md:mb-0 md:text-xl font-semibold text-white md:text-black hover:text-[#da4a03] hover:bg-gray-200 md:hover:bg-transparent hover:px-20 md:hover:px-0 hover:py-2 md:hover:py-0 duration-300`}>
                    <div onClick={() => setIsOpen(true)} > {menuitem.navtitle}</div> </NavLink>
                )
              })
            }
          </div>
        )
      }
    </motion.header>
  )
}

export default Header;
