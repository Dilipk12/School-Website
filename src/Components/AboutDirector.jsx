import React from 'react'
import {motion} from 'framer-motion'
const AboutDirector = () => {
    return (
        <div className="bg-white relative overflow-x-hidde flex justify-center items-center lg:flex-row flex-col gap-8 w-full h-full mt-10 sm:mt-0 px-5 py-10 lg:p-8 lg:py-20">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="hidden lg:block absolute -top-5 right-32 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:mt-16"
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
            </svg>
            <motion.div
                initial={{ x: -600 }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1,

                }}
                className="bg-gree-500 flex items-center justify-center w-full lg:w-[50%]">
                <img className='md:h-[400px] h-[100%] object-cover bg-gradient-to-tr from-violet-500 to-slate-900 p-4 rounded-xl' src="https://as2.ftcdn.net/v2/jpg/01/99/36/81/1000_F_199368197_CXhzovd2cgXhK3SR4xjUKNhTer8j5I87.jpg" alt="image not fount" />
            </motion.div>

            <motion.div
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1,

                }}
                className="flex flex-col justify-center items-center gap-2 lg:items-start w-full lg:w-[48%]">
                <h1 className='text-2xl font-bold'>From The Dest</h1>
                <h1 className='text-3xl font-bold text-orange-700'>Director's Messege</h1>
                <p className='font-medium text-justify text-slate-600 text-sm sm:text-lg'>Lorem ipsum dolor sapiente distinctio reiciendis sit quaerat minus? Nisi distinctio minima odio, ducimus quos fuga! Sint aperiam esse quos rerum quasi, enim a saepe est praesentium dolor molestiae aliquam cupiditate perspiciatis, nobis unde incidunt possimus? Accusantium iusto amet repudiandae cupiditate nobis nam dicta maiores tenetur itaque. Expedita ea exercitationem, veritatis ratione ullam architecto recusandae quo, labore repudiandae fugit suscipit necessitatibus numquam amet, enim optio. Repellat nesciunt accusamus minima magnam! Non fuga sit nostrum mollitia, accusamus tempore!</p>
            </motion.div>
        </div>
    )
}

export default AboutDirector