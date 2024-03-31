import { motion } from 'framer-motion';
import { MdPlayArrow } from "react-icons/md";

function Home() {
    return (

        <main className="overflow-x-hidden flex justify-center items-center lg:flex-row flex-col gap-3 w-full h-full lg:h-screen py-20 lg:py-0 px-5">
            {/* Home text and button content  */}
            <motion.div
                initial={{ x: -600 }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1,
                    delay: .5
                }}

                className="flex flex-col justify-center items-center lg:items-start gap-5 sm:gap-10 w-full lg:w-[48%]">
                <h1 className='text-4xl sm:text-7xl text-center lg:text-left font-bold'>Pembelajaran <br /> Yang ceria demi <br /> anak gembira</h1>
                <p className='font-medium text-center lg:text-left text-slate-600 text-sm sm:text-lg'>We are at the topo learning platform who provides a better and <br /> perfect environment for your kids of grow and learn.</p>
                <div className="flex gap-x-4">
                    <button className='px-8 py-2 sm:py-4 sm:w-56 rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-2xl sm:rounded-bl-3xl rounded-br-md rounded-tl-md bg-[#da4a03] hover:bg-transparent border-2 border-[#da4a03] hover:border-[#da4a03] hover:text-[#da4a03]  duration-150 text-slate-100 text-xl sm:text-2xl font-semibold'>Login</button>
                    <button className='flex items-center justify-center gap-2 sm:px-5 hover:text-[#da4a03] duration-300 text-black text-xl sm:text-2xl font-semibold'><div className='text-xl sm:text-3xl bg-white p-2 sm:p-3 rounded-full shadow-lg shadow-gray-500'><MdPlayArrow /></div>Video</button>
                </div>
            </motion.div>

            {/* Home image source  */}
            <motion.div
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1,
                    delay: .5
                }}
                className="bg-gree-500 flex items-center justify-center lg:justify-end w-full lg:w-[50%]">
                <img className='md:h-[550px] h-[100%]' src="/image/student.png" alt="image not fount" />
            </motion.div>

        </main>

    )
}

export default Home;