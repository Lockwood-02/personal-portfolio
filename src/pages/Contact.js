import Header from "../components/Header";

function Contact() {
    return (
        <>
            <Header />
            <h1 className="text-5xl font-bold mt-32 mb-8">Contact</h1>
            <div className="flex flex-col mb-10 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form
                        action="https://getform.io/f/181ce5a3-3b39-473b-80b4-84f54c2c3e91"
                        method="POST"
                        className="flex flex-col w-full"
                    >

                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            rows='10'
                            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
                        />

                        <button
                            type="submit"
                            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
                        >
                            Connect
                        </button>
                    </form>

                    {/* Map Implementation */}
                    <div className="bg-gray-200 p-6 rounded-md hidden md:flex">
                        {/* Add your map component or embed code here */}
                        {/* Example: */}
                        <iframe
                            title="My City"
                            width="100%"
                            height="100%"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102001.52576359874!2d-86.50236344835086!3d36.97285822807409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8865e8bce9fae4d3%3A0xa70aac9020792c4f!2sBowling%20Green%2C%20KY!5e0!3m2!1sen!2sus!4v1699827295905!5m2!1sen!2sus"
                        />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;

