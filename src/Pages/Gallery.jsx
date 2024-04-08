import { motion } from 'framer-motion'
import GallaryGrid from '../Components/GallaryGrid'

function Gallery() {

    return (
        <section>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5 }}
                className="flex items-center justify-center w-full p-16 sm:p-24 text-3xl sm:text-5xl font-bold text-gray-200 bg-black rounded-xl" >
                Gallery
            </motion.div>


            <GallaryGrid />

        </section>
    )
}

export default Gallery