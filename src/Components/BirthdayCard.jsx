import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BirthdayCard = () => {

    const birthddayCardData = [
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Virendra",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Rajveer",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Ajay",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Manoj",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Kishan",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Devendra",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Karan",
            bgColor: "bg-red-50"
        }

    ]

    return (
        <>

            <Swiper
                // Swiper modules
                modules={[Autoplay, Pagination, A11y]}
                spaceBetween={50}
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    950: {
                        width: 950,
                        slidesPerView: 3,
                    },
                    1280: {
                        width: 1280,
                        slidesPerView: 4,
                    },
                }}

                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}

                style={{
                    "--swiper-pagination-color": "black",
                    "--swiper-navigation-color": "black",
                }}

                className="py-20 lg:px-12 lg:pr-24"
            >
                {/* birthday Card content */}
                {
                    birthddayCardData.map((data, i) => (
                        <SwiperSlide key={i} className="flex items-center justify-center">
                            <div style={{ backgroundImage: `url(/image/birthdayBackground.png)` }} className={`bg-center bg-cover w-[260px] h-[350px] overflow-hidden ${data.bgColor} rounded-xl`}>
                                <div className="flex justify-center relative">
                                    <img className='h-44 w-32 mt-10 bg-slate-300 rounded-full object-cover' src={data.imgSrc} alt="image not found" />

                                    <img className='absolute top-44 w-44' src="/image/happyBirthday.png" alt="image not found" />
                                    <img className='absolute top-3 left-16 rotate-[290deg] w-20' src="/image/birthdayCap.png" alt="image not found" />
                                    <img className='absolute top-64 -right-8 w-20' src="/image/gift.png" alt="image not found" />
                                    <img className='absolute top-60 -left-12 rotate-[deg] w-20' src="/image/gift.png" alt="image not found" />
                                </div>
                                <div className="pt-[45px] px-10 text-center">
                                    <h1 className='font-bold text-2xl text-red-800'>{data.name}</h1>
                                    <h1 className='font-semibold text-sm text-gray-900'>Wishing you a day filled with joy and happiness!</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default BirthdayCard
