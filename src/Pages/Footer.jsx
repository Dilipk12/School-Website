import { Link } from 'react-router-dom'

import { RiTwitterXFill } from 'react-icons/ri'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'


function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 flex flex-wrap gap-5 lg:gap-3 items-start justify-start lg:justify-around lg:-mx-8  py-20 px-10 rounded-t-2xl">

        {/* about category links */}
        <div>
          <div className='space-y-3'>
            <h1 className='text-4xl font-bold text-[#da4a03] '>My School</h1>
            <p className='w-full sm:w-60 text-sm text-slate-200 text-justify'>Lorem ipsum dolor sit veritatis officia amet, ipsum dolor sit, amet consectetur suscipit veritatis officia amet ipsum dolor sit, amet consectetur suscipit veritatis officia amet quos laboriosam atque molestiae!</p>
          </div>
          {/* social media icons */}
          <div className="flex text-3xl gap-4 p-3">
            <a href='' target="_blank"><RiTwitterXFill className='text-slate-300 hover:text-[#da4a03] cursor-pointer duration-300' /></a>
            <a href='' target="_blank"><BiLogoLinkedin className='text-slate-300 hover:text-[#da4a03] cursor-pointer duration-300' /></a>
            <a href='' target="_blank"><FaFacebook className='text-slate-300 hover:text-[#da4a03] cursor-pointer duration-300' /></a>
            <a href='' target="_blank"><FaInstagram className='text-slate-300 hover:text-[#da4a03] cursor-pointer duration-300' /></a>
          </div>

        </div>

        {/* menu category links */}
        <div className="flex flex-col h-full justify-center gap-3">
          <h1 className='font-bold text-2xl text-white pb-2'>Menu</h1>
          <Link to="/" className='cursor-pointer font-semibold text-md hover:text-[#da4a03] duration-300 text-slate-300'>Home</Link>
          <Link to="about" className='cursor-pointer font-semibold text-md hover:text-[#da4a03] duration-300 text-slate-300'>Feature</Link>
          <Link to="services" className='cursor-pointer font-semibold text-md hover:text-[#da4a03] duration-300 text-slate-300'>Gallery</Link>
          <Link to="contact" className='cursor-pointer font-semibold text-md hover:text-[#da4a03] duration-300 text-slate-300'>Contact Us</Link>
        </div>

        {/* map category links */}
        <div className="flex flex-col h-full justify-center gap-3">
          <h1 className='font-bold text-2xl text-white pb-5'>School Map</h1>
          <div className="bg-gray-300">
            <iframe className='w-full sm:w-96 h-44 border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113274.61036122631!2d77.60175219384465!3d27.474502405543355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4d5205%3A0x4273a09defe10ea5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711253490201!5m2!1sen!2sin"></iframe>
          </div>
        </div>

       
        {/* contact category links */}
        <div className="flex flex-col h-full justify-center gap-3">
          <h1 className='font-bold text-2xl text-white pb-2'>Contact Us</h1>
          <p className='font-semibol text-md text-slate-300'>Mathura Utter Pradesh 281403 India</p>
          <p className='text-md font-medium text-slate-300'><span className='font-bold '>Phone:</span> +91 xxx-xxx-xxxx</p>
          <p className='text-md font-medium text-slate-300'><span className='font-bold '>Email:</span> school@gmail.in</p>
          <p className='text-md font-medium text-slate-300'><span className='font-bold '>Website:</span> school.in</p>
        </div>

      </footer>

      {/* Copyright content */}
      <div className="bg-blue-950 p-8 lg:-mx-8">
        <p className='text-sm text-center text-white sm:text-md '>© Copyright <span className='font-bold cursor-pointer'>Techstrack</span>. All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer