import { motion } from 'framer-motion'

import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import JoinUs from './JoinUs';


function Contact() {

  const contactData = [
    {
      icon: <IoLocationOutline />,
      title: "Address",
      content: "Mathura,Uttar Pradesh"
    },
    {
      icon: <TfiEmail />,
      title: "Email",
      content: "school@gmail.com"
    },
    {
      icon: <MdOutlinePhoneInTalk />,
      title: "Phone",
      content: "+91 000 0000 000"
    }
  ]

  return (
    <>
      <section className=' pb-20 flex flex-col gap-16 justify-center items-center'>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .5 }}
          className="flex items-center justify-center w-full p-16 sm:p-24 text-3xl text-gray-200 bg-black sm:text-5xl font-bold rounded-xl" >
          Contact Us
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {
            contactData.map((data, i) =>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5, delay: .5 }}
                key={i} className=" flex flex-col items-center justify-center h-44 bg-white hover:bg-black hover:text-white  cursor-pointer duration-300 p-8 rounded-md">
                <div className="text-3xl text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full p-4">{data.icon}
                </div>
                <div className="">
                  <h1 className=" pt-2 text-xl text-center font-semibold">{data.title}</h1>
                  <p className="text-sm font-semibold text-center text-gray-400 w-52">{data.content}</p>
                </div>
              </motion.div>
            )}

        </div>


      </section>
      {/* Join us Secion */}
      <JoinUs />
      <div className="pb-20"></div>
    </>

  )
}

export default Contact;