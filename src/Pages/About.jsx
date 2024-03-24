import React from 'react'



function About() {
  return (
    <section className='flex flex-col gap-20'>
      <div className="flex items-center justify-center w-full p-16 sm:p-24 text-3xl sm:text-5xl font-bold text-gray-200 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl" >About Us</div>

      <main className="flex justify-center items-center lg:flex-row flex-col gap-8 w-full h-full px-5">


        <div className="flex flex-col justify-center items-center lg:items-start gap-5 sm:gap-10 w-full lg:w-[48%]">
          <p className='font-medium text-justify text-slate-600 text-sm sm:text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eveniet sunt magnam saepe voluptates delectus illo. Voluptatibus, quisquam voluptatem. Doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id qui quia? Dolorem, nostrum. Tenetur harum vel iure architecto alias fugiat exercitationem ipsum porro ea, mollitia, sapiente distinctio reiciendis sit quaerat minus? Nisi distinctio minima odio, ducimus quos fuga! Sint aperiam esse quos rerum quasi, enim a saepe est praesentium dolor molestiae aliquam cupiditate perspiciatis, nobis unde incidunt possimus? Accusantium iusto amet repudiandae cupiditate nobis nam dicta maiores tenetur itaque. Expedita ea exercitationem, veritatis ratione ullam architecto recusandae quo, labore repudiandae fugit suscipit necessitatibus numquam amet, enim optio. Repellat nesciunt accusamus minima magnam! Non fuga sit nostrum mollitia, accusamus tempore!</p>
        </div>

        <div className="bg-gree-500 flex items-center justify-center w-full lg:w-[50%]">
          <img className='md:h-[400px] h-[100%] bg-black' src="https://assets.iflscience.com/assets/articleNo/65189/aImg/61687/ai-generated-art-meta.jpg" alt="image not fount" />
        </div>

      </main>

      <main className="flex justify-center items-center lg:flex-row flex-col-reverse gap-8 w-full h-full px-5 py-5">

        <div className="bg-gree-500 flex items-center justify-center w-full lg:w-[50%]">
          <img className='md:h-[400px] h-[100%] bg-black' src="https://assets.iflscience.com/assets/articleNo/65189/aImg/61687/ai-generated-art-meta.jpg" alt="image not fount" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2 lg:items-start w-full lg:w-[48%]">
          <h1 className='text-2xl font-bold'>From The Dest</h1>
          <h1 className='text-3xl font-bold text-orange-700'>Director's Messege</h1>
          <p className='font-medium text-justify text-slate-600 text-sm sm:text-lg '>Lorem ipsum dolor sapiente distinctio reiciendis sit quaerat minus? Nisi distinctio minima odio, ducimus quos fuga! Sint aperiam esse quos rerum quasi, enim a saepe est praesentium dolor molestiae aliquam cupiditate perspiciatis, nobis unde incidunt possimus? Accusantium iusto amet repudiandae cupiditate nobis nam dicta maiores tenetur itaque. Expedita ea exercitationem, veritatis ratione ullam architecto recusandae quo, labore repudiandae fugit suscipit necessitatibus numquam amet, enim optio. Repellat nesciunt accusamus minima magnam! Non fuga sit nostrum mollitia, accusamus tempore!</p>
        </div>

      </main>
    </section>
  )
}

export default About;

