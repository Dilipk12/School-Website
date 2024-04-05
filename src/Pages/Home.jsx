import { motion } from 'framer-motion';

function Home() {


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
    return (
        <>
            <main className="overflow-x-hidden flex justify-center items-center lg:flex-row flex-col-reverse gap-10 sm:gap-20 lg:gap-3 w-full h-full lg:h-screen pt-12 sm:pt-20 sm:py-20 lg:py-0 px-5">
                <svg
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
                </svg>
                {/* Home text and button content  */}
                <motion.div
                    initial={{ x: -600 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 1,
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
                    <img className='md:h-[500px] h-[100%] px-8 sm:px-0' src="/image/student.png" alt="image not fount" />
                </motion.div>

            </main>

            {/* about of school Director's*/}
            <div className="relative overflow-x-hidde flex justify-center items-center lg:flex-row flex-col gap-8 w-full h-full px-5 pt-10 sm:p-0 lg:py-10">
                <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute -top-5 right-32 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:mt-16"
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
                    <img className='md:h-[400px] h-[100%] bg-gradient-to-tr from-violet-500 to-slate-900 p-4 rounded-xl' src="https://as2.ftcdn.net/v2/jpg/01/99/36/81/1000_F_199368197_CXhzovd2cgXhK3SR4xjUKNhTer8j5I87.jpg" alt="image not fount" />
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
                    <p className='font-medium text-justify text-slate-600 text-sm sm:text-lg '>Lorem ipsum dolor sapiente distinctio reiciendis sit quaerat minus? Nisi distinctio minima odio, ducimus quos fuga! Sint aperiam esse quos rerum quasi, enim a saepe est praesentium dolor molestiae aliquam cupiditate perspiciatis, nobis unde incidunt possimus? Accusantium iusto amet repudiandae cupiditate nobis nam dicta maiores tenetur itaque. Expedita ea exercitationem, veritatis ratione ullam architecto recusandae quo, labore repudiandae fugit suscipit necessitatibus numquam amet, enim optio. Repellat nesciunt accusamus minima magnam! Non fuga sit nostrum mollitia, accusamus tempore!</p>
                </motion.div>
            </div>

            {/* student gallary */}
            <div className="pt-14">
                <h1 className='text-4xl pb-8 text-center font-semibold '>Student Gallary</h1>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mx-auto px-6 sm:px-10 pb-14">
                    {
                        imagedata.map((img, id) => (
                            <div key={id} className="w-full mb-4 break-inside-avoid overflow-hidden">
                                <img className="max-w-full rounded-lg hover:scale-125 duration-300 cursor-pointer" src={img.imgsrc} alt="image not found" />
                            </div>
                        ))
                    }
                </div>
            </div>





        </>

    )
}

export default Home;