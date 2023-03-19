import Header from "../components/Header";

function Contact() {
    return (
        <>
            <Header />
            <h1 className="text-5xl font-bold mt-32 mb-8">Contact</h1>
            <div className='flex flex-col mb-10 mx-auto'>
                <div className='flex'>
                    <form
                    action='https://getform.io/f/181ce5a3-3b39-473b-80b4-84f54c2c3e91'
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
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
                        type='submit'
                        className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'
                    >
                        Connect
                    </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;