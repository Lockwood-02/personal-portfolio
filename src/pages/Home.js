import Header from "../components/Header";


function Home() {
    return (
        <>
            <Header />
            <div className="flex justify-between">
                <header>
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mt-32">Hi, I'm Isaac!</h1>
                        <h3 className="text-xl mt-10">Welcome to my website.</h3>
                        <p className="text-xl mt-8">
                            I'm a software developer in Bowling Green and a student at Western Kentucky University.
                            I love creating applications that test my limits and creativity.
                            I'm currently a senior working towards my Bachelors and Masters in computer science through a joint program.
                        </p>
                    </div>
                </header>
                <div className="flex mt-20 ml-8">
                    <img src="https://i.postimg.cc/HLY3rvHR/me2.jpg" alt="me" title="MeOnDaBeach" className="border rounded border-[#2c2c2c] dark:border-gray-400"/>
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
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>Tailwindcss</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            {/* changing to django */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="skill" width={64} height={64}/> 
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>Django</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl dark:shadow-[#000] rounded-xl hover:scale-105 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="skill" width={64} height={64}/>
                        </div>
                        <div  className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
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