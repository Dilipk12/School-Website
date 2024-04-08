






const StuBirthday = () => {

    const birthddayCardData = [
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Virendra",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Virendra",
            bgColor: "bg-red-50"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Virendra",
            bgColor: "bg-red-50"
        }, {
            imgSrc: "https://img.freepik.com/premium-photo/happy-3d-student-boy-with-books-white-background-isolated-white-background_856795-1009.jpg",
            name: "Virendra",
            bgColor: "bg-red-50"
        }
    ]

    return (
        <section className=" px-5 py-24">
            <h1 className='text-4xl pb-8 text-center font-semibold'>Student's Birthday</h1>
            <div className="flex gap-5 flex-wrap items-center justify-center">

                {/* birthday Card content */}
                {
                    birthddayCardData.map((data, i) => (
                        <div key={i} style={{ backgroundImage: `url(/image/birthdayBackground.png)` }} className={`bg-center bg-cover w-[260px] h-[350px] overflow-hidden ${data.bgColor} rounded-md`}>
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
                    ))
                }

            </div>

        </section>
    )
}

export default StuBirthday