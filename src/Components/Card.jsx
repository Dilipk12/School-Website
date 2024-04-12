import { RiTwitterXFill } from 'react-icons/ri';
import { motion } from 'framer-motion'

function Card() {

    const cardsdata = [
        {
            icon: <RiTwitterXFill />,
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis adipisicing elit. Deserunt, reiciendis.',
            bgcolor: 'bg-gradient-to-br from-rose-500 to-slate-100'
        },
        {
            icon: <RiTwitterXFill />,
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis adipisicing elit. Deserunt, reiciendis.',
            bgcolor: 'bg-gradient-to-br from-teal-500 to-slate-100'
        },
        {
            icon: <RiTwitterXFill />,
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis adipisicing elit. Deserunt, reiciendis.',
            bgcolor: 'bg-gradient-to-br from-yellow-500 to-slate-100'
        },
        {
            icon: <RiTwitterXFill />,
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis adipisicing elit. Deserunt, reiciendis.',
            bgcolor: 'bg-gradient-to-br from-violet-500 to-slate-100'
        }
    ]
    return (
        <>
            {
                cardsdata.map((data, id) => {
                    return (
                        <motion.div
                            variants={{ hidden: { opacity: 0,scale:0 }, show: { opacity: 1,scale:1 } }}
                            key={id} className={`w-72 h-[350px]  ${data.bgcolor} p-8`}>
                            <div className='text-5xl flex items-center justify-center py-5'>{data.icon}</div>
                            <p className='font-bold h-1/2 py-5 text-center'>{data.para}</p>
                        </motion.div>
                    )
                })

            }
        </>
    )
}

export default Card