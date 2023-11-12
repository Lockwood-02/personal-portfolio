import Header from "../components/Header";


function Home() {
    return (
        <>
            <Header />
            <div className="flex justify-between">
                <header>
                    <div className="max-w-4xl text-center md:text-left">
                        <h1 className="text-5xl font-bold mt-32">Hi, I'm Isaac!</h1>
                        <h3 className="text-xl mt-10">Welcome to my website.</h3>
                        <p className="text-xl mt-8">
                            I'm a software developer in Bowling Green and a student at Western Kentucky University.
                            I love creating applications that test my limits and creativity.
                            I'm currently a senior working towards my Bachelors and Masters in computer science through a joint program.
                        </p>
                    </div>
                </header>
                <div className="flex mt-20 ml-8 m-auto hidden md:block">
                    {/* <img src="https://i.postimg.cc/qqL1P5v2/waving-hand.png" alt="me" title="MeOnDaBeach" className="dark:stone-300 rounded h-72 w-96" /> */}
                    <svg
                        className='stroke-[#2c2c2c] h-72 w-96 dark:stroke-stone-300'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 72 72'
                    >
                        <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m18.6575 19.2409c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l11.5324 15.0998 2.6883 3.3878-7.8906-10.3314c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.7421l7.8906 10.3312 6.2707 7.899c5.467 6.2731 14.5147 5.9306 20.7863.465 3.6045-3.1684 5.9226-7.5482 6.5154-12.3105.3858-4.2326.807-15.301.807-15.301-.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939 9.7575-3.3657-4.2224 3.3657 4.2224-3.3657-4.2224-13.4651-17.2086c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l4.2488 5.5631 6.4234 8.48-13.419-17.6801c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3116 4.8183c.1552.2714.3458.5209.5667.7421l14.6716 19.0145" /><g stroke-miterlimit="10"><path d="m11.6726 42.8719c0 2.5663 1.747 4.6428 3.9059 4.6428" /><path d="m7.0614 42.4369c0 5.5959 3.8094 10.1241 8.5171 10.1241" /><path d="m45.2619 21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428" /><path d="m49.8731 21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241" /></g></g>
                    </svg>
                </div>
            </div>
            <div className="flex">
                <h3 className="text-4xl font-bold mt-16">Skills</h3>
            </div>

            <div id='skills' className='w-full p-2'>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                        {/* Start Icons */}

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Python</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Java</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>CSS</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {/* changing to django */}
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Django</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>JavaScript</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>React</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="skill" width={64} height={64} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Tailwindcss</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Favorite Projects??? */}
        </>
    )
}

export default Home;