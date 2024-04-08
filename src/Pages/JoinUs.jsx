
const JoinUs = () => {
    return (
        <section className="bg-white relative py-12 lg:py-24 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center">
                {/* Image Section */}
                <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
                    <img
                        className="rounded shadow-lg"
                        src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg"
                        alt="Contact"
                    />
                </div>
                {/* Form Section */}
                <div className="lg:w-1/2 z-10">
                    <div className="bg-black shadow-md rounded-xl px-8 py-8 lg:py-16">
                        <h2 className="text-2xl font-bold mb-6 text-white">Join Us</h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-white text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-white text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-white text-sm font-bold mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Your Message"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-200 duration-300 text-black font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JoinUs