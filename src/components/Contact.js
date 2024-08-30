const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">Contact Us</h1>
                <form className="space-y-4">
                    <input
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        placeholder="Your Email"
                    />
                    <input
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                        placeholder="Your Message"
                    ></textarea>
                    <button
                        className="w-full bg-orange-600 text-white font-semibold p-3 rounded-md hover:bg-orange-700 transition duration-300"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Contact;