import React from 'react'

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

    return (
        <section className="">
            <div className="flex items-center justify-center w-full p-16 sm:p-24 text-3xl sm:text-5xl font-bold text-gray-200 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl" >Gallery</div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20 py-16">
                {
                    imagedata.map((img, id) => {
                        return (<div key={id}>
                            <img className="h-auto max-w-full rounded-lg" src={img.imgsrc} alt="image not found" />
                        </div>)
                    })
                }

            </div>

        </section>
    )
}

export default Gallery