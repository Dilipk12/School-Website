import { useState } from 'react';
import { motion } from 'framer-motion';

import Logo from './Logo'
import Nav from './Nav'

import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";


function Header() {

    const [isOpen, setIsOpen] = useState(true);

    const ToggleNavbar = () => {
        setIsOpen(!isOpen);
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
                    <Nav />
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
                    className='md:hidden h-screen w-full flex basis-full items-center flex-col justify-center absolute top-1/2 left-0 -mt-12 rounded-3xl bg-black p-10 gap-y-4'><Nav setIsOpen={setIsOpen} /></div>
                )
            }
        </motion.header>
    )
}

export default Header