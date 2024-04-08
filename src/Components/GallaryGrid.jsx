import React from 'react'
import {motion} from 'framer-motion'

const GallaryGrid = () => {
    const imagedata = [
        { imgsrc: "https://img.freepik.com/premium-photo/digital-art-selected_693504-849.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
        { imgsrc: "https://img.freepik.com/premium-photo/pasta-image-pasta-lovers_841543-17412.jpg" },
        { imgsrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
        { imgsrc: "https://deepai.org/static/images/cyberpunkdolphin.png" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
        { imgsrc: "https://pixlr.com/images/index/ai-image-generator-one.webp" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { imgsrc: "https://pics.craiyon.com/2023-07-08/2032b38b71fb48e78293079569ba9e73.webp" }
    ]

    const staggerVariants = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                staggerChildren: .3,
            }
        }
    }
    return (
        <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="show"
            className="pt-14">
            <h1 className='text-4xl pb-8 text-center font-semibold '>Student Gallary</h1>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mx-auto px-6 sm:px-10 pb-14">
                {
                    imagedata.map((img, id) => (
                        <motion.div
                            variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
                            key={id} className="w-full mb-4 break-inside-avoid overflow-hidden">
                            <img className="max-w-full rounded-lg hover:scale-125 duration-300 cursor-pointer" src={img.imgsrc} alt="image not found" />
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default GallaryGrid