import React from 'react'
import Card from '../Components/Card';

function Feature() {
    return (
        <section className='w-full px-5 flex flex-col justify-center py-16'>
            <div className="flex justify-center items-center flex-col gap-5">
                <h1 className='text-2xl sm:text-3xl font-bold text-center'>Lorem ipsum dolor sit amet consectetur elit</h1>
                <p className='font-semibold text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet elit. Beatae, asperiores. <br /> Voluptates repellat magni, ratione voluptate asperiores earum dolorem a et?</p>
            </div>
            <div className="flex flex-wrap justify-center items-center py-16 w-full">
                <Card />
            </div>
        </section>
    )
}

export default Feature;