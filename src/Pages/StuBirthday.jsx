import BirthdayCard from "../Components/BirthdayCard";

const StuBirthday = () => {
    return (
        <section className="px-5 py-24">
            <h1 className='text-3xl sm:text-4xl text-center font-semibold'>Student's Birthday</h1>

            {/* birthday Card content */}
            <div>
                <BirthdayCard />
            </div>
        </section>
    )
}

export default StuBirthday;


