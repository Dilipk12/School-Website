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
        <section className='w-full px-5 flex flex-col justify-center py-16'>
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