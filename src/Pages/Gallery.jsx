import { motion } from 'framer-motion'

function Gallery() {

    const imagedata = [
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { imgsrc: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" }

    ]

    const staggerVariants = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                staggerChildren: .5,
            }
        }
    }

    return (
        <section>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5 }}
                className="flex items-center justify-center w-full p-16 sm:p-24 text-3xl sm:text-5xl font-bold text-gray-200 bg-black rounded-xl" >
                Gallery
            </motion.div>


            <motion.div
                variants={staggerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20 py-16">
                {
                    imagedata.map((img, id) => {
                        return (<motion.div
                            variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
                            key={id}>
                            <img className="h-auto max-w-full rounded-lg" src={img.imgsrc} alt="image not found" />
                        </motion.div>)
                    })
                }
            </motion.div>

        </section>
    )
}

export default Gallery