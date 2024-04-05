import React from 'react'
import { motion } from 'framer-motion';
import Card from '../Components/Card';

function Feature() {

    const staggerVariants = {
        hidden: { opcity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .5,
            }
        }
    }


    return (
        <section className=' relative w-full px-5 flex flex-col justify-center py-16'>
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute -top-8 left-48 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:mt-16"
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
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-14 right-32 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:mt-16"
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
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5 }}
                className="flex justify-center items-center flex-col gap-5">
                <h1 className='text-2xl sm:text-3xl font-bold text-center'>Lorem ipsum dolor sit amet consectetur elit</h1>
                <p className='font-semibold text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet elit. Beatae, asperiores. <br /> Voluptates repellat magni, ratione voluptate asperiores earum dolorem a et?</p>
            </motion.div>

            <motion.div
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                // viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center py-16 w-full">
                <Card />
            </motion.div>
        </section>
    )
}

export default Feature;