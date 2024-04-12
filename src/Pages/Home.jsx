import { motion } from 'framer-motion';
import AboutDirector from '../Components/AboutDirector';
import GallaryGrid from '../Components/GallaryGrid';
import Feature from './Feature';
import JoinUs from './JoinUs';
import StuBirthday from './StuBirthday';

function Home() {

    return (
        <>
            <main className="overflow-x-hidden flex justify-center items-center lg:flex-row flex-col-reverse gap-10 sm:gap-20 lg:gap-3 w-full h-full lg:h-screen pt-12 sm:pt-20 sm:py-20 lg:py-0 px-5">

                <motion.svg
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: .5 }}
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="hidden lg:block absolute top-72 right-[700px] z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:mt-16"
                >
                    <defs>
                        <pattern
                            id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                        width="52"
                        height="24"
                    />
                </motion.svg>
                {/* Home text and button content  */}
                <motion.div
                    initial={{ x: -600 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: .8,
                        delay: .5
                    }}

                    className="flex flex-col justify-center items-center lg:items-start gap-5 sm:gap-10 w-full lg:w-[48%]">
                    <h1 className='text-4xl sm:text-7xl text-center lg:text-left font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600'>Nurturing </span> <br /> Tomorrow's Leaders <br />Today</h1>
                    <p className='font-medium text-center lg:text-left text-slate-600 text-sm sm:text-lg'>We are Lotus Valley Public School, Teaching  is our passion and your child is our priority.</p>
                    <div className="flex gap-x-4">
                        <button className='px-8 py-2 sm:py-4 sm:w-56 rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-2xl sm:rounded-bl-3xl rounded-br-md rounded-tl-md bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 border-2  duration-150 text-white text-xl sm:text-2xl font-semibold'>Know More</button>
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
                    <img className='md:h-[500px] h-[100%] px-8 sm:px-0' src="/image/Students.png" alt="image not fount" />
                </motion.div>

            </main>

            {/* about of school Director's*/}
            <AboutDirector />

            {/* student gallary */}
            <GallaryGrid />

            {/* Join us Secion */}
            <JoinUs />

            {/* Birthday Card Secion*/}
            <StuBirthday />

            {/* Feature Card Secion*/}
            <Feature />
        </>

    )
}

export default Home;