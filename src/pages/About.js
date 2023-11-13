import React, { useState } from 'react';
import Header from "../components/Header";

function About() {
    const [mode, setMode] = useState('personal');

    const handleToggleChange = () => {
        setMode((prevMode) => (prevMode === 'personal' ? 'recruiter' : 'personal'));
    };

    return (
        <>
            <Header />
            <div className="flex justify-between m-auto text-center md:text-left">
                <header className="relative">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mt-32">About me</h1>

                        {/* Toggle Switch */}
                        <div className="flex justify-center items-center mt-8 md:justify-start md:items-center">
                            <p className="mr-2 text-large">
                                Personal Mode
                            </p>
                            <label
                                htmlFor="toggleSwitch"
                                className="bg-stone-300 dark:bg-stone-300 cursor-pointer relative w-20 h-10 rounded-full"
                            >
                                <input
                                    type="checkbox"
                                    id="toggleSwitch"
                                    className="sr-only peer"
                                    checked={mode === 'recruiter'}
                                    onChange={handleToggleChange}
                                />
                                <span
                                    className={`w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-amber-500 peer-checked:left-11 transition-all duration-500 ${mode === 'recruiter' ? 'left-11' : 'left-1'
                                        }`}
                                ></span>
                            </label>
                            <p className="ml-2 text-large">
                                Recruiter Mode
                            </p>
                        </div>

                        {mode === 'personal' && (
                            <>
                                <p className="text-xl mt-8">
                                    Hi there! I'm Isaac, a software developer from Bowling Green KY. I am currently working
                                    towards my MS in Computer Science. I love technology and science and have been obsessed with coding since I was a kid. I love making
                                    games as well and it keeps me warmed up for most challenges.
                                    <br />
                                    <br />
                                    My core values are being honest, respectful, and caring. One of my many passions also comes in the form of mechanical
                                    keyboards. My goal as a developer is to provide the best quality applications
                                    that I enjoy crafting.

                                </p>
                                {/* ... Other content for personal mode ... */}
                            </>
                        )}
                        {mode === 'recruiter' && (
                            <>
                                {/* Content for Recruiter Mode */}
                                <p className="text-xl mt-8">
                                    Right now I am a open for new positions and possibilities within the software development field. I am getting my MS in Computer Science
                                    in December of 24'. You can also find my resume <a href='https://docs.google.com/document/d/1ocPddHSScaqN3ZLxyrtEIY3cpP6V80Je0LxbB-anp9Q/edit' target="_blank" rel="noreferrer" className="text-amber-500 underline hover:bg-amber-500 hover:text-stone-300">here.</a>
                                    <br />
                                    <br />
                                    Here are some skills/buzzwords you might be searching for: <p className='font-bold'>Java, Python, React, NodeJS, Data Structures, Algorithm Analysis.</p>
                                </p>
                                {/* ... Other content for recruiter mode ... */}
                            </>
                        )}
                    </div>
                </header>
                <div className="flex mt-20 ml-8 m-auto object-bottom hidden md:block">
                    <img src="https://i.postimg.cc/SNMv2FkR/fotor-2023-3-15-0-4-55.jpg" alt="me" title="MeOnDaPhotoShoot" className="border rounded border-[#2c2c2c] dark:border-gray-400" />
                </div>
            </div>
            <div className="flex w-full h-auto m-auto mx-auto mt-8 md:hidden justify-center">
                <img src="https://i.postimg.cc/SNMv2FkR/fotor-2023-3-15-0-4-55.jpg" alt="me" title="MeOnDaPhotoShoot" className="border rounded border-[#2c2c2c] dark:border-gray-400" />
            </div>

        </>
    );
}

export default About;
