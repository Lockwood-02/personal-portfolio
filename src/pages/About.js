import React, { useState } from "react";
import Header from "../components/Header";

function About() {
    const [mode, setMode] = useState("personal");

    const handleToggleChange = () => {
        setMode((prevMode) =>
            prevMode === "personal" ? "recruiter" : "personal"
        );
    };

    return (
        <>
            <Header />
            <div className="flex justify-between m-auto text-center md:text-left">
                <header className="relative">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mt-32">About me</h1>

                        {/* Toggle Switch */}

                        {/* Toggle Switch */}
                        <div className="flex justify-center items-center mt-8 md:justify-start md:items-center">
                            <p className="mr-4 text-large text-gray-500 dark:text-gray-400">
                                Personal Mode
                            </p>
                            <label
                                htmlFor="toggleSwitch"
                                className="relative inline-block w-12 h-6 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    id="toggleSwitch"
                                    className="sr-only peer"
                                    checked={mode === "recruiter"}
                                    onChange={handleToggleChange}
                                />
                                {/* Switch Background */}
                                <span className="block w-full h-full bg-gray-300 rounded-full dark:bg-gray-600 peer-checked:bg-blue-500 transition-all duration-300"></span>
                                {/* Switch Knob */}
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-6`}
                                ></span>
                            </label>
                            <p className="ml-4 text-large text-gray-500 dark:text-gray-400">
                                Recruiter Mode
                            </p>
                        </div>

                        {mode === "personal" && (
                            <>
                                <p className="text-xl mt-8">
                                    Hi there! I'm Isaac, a software developer
                                    from Bowling Green KY. I am currently
                                    working towards my MS in Computer Science. I
                                    love technology and science and have been
                                    obsessed with coding since I was a kid. I
                                    love making games as well and it keeps me
                                    warmed up for most challenges.
                                    <br />
                                    <br />
                                    My core values are being honest, respectful,
                                    and caring. One of my many passions also
                                    comes in the form of mechanical keyboards.
                                    My goal as a developer is to provide the
                                    best quality applications that I enjoy
                                    crafting.
                                </p>
                                {/* ... Other content for personal mode ... */}
                            </>
                        )}
                        {mode === "recruiter" && (
                            <>
                                {/* Content for Recruiter Mode */}
                                <p className="text-xl mt-8">
                                    Right now I am a open for new positions and
                                    possibilities within the software
                                    development field. I am getting my MS in
                                    Computer Science in December of 24'. You can
                                    also find my resume{" "}
                                    <a
                                        href="/resume"
                                        rel="noreferrer"
                                        className="text-amber-500 underline hover:bg-amber-500 hover:text-stone-300"
                                    >
                                        here.
                                    </a>
                                    <br />
                                    <br />
                                    Here are some skills/buzzwords you might be
                                    searching for:{" "}
                                    <p className="font-bold">
                                        Java, Python, React, NodeJS, Data
                                        Structures, Algorithm Analysis.
                                    </p>
                                </p>
                                {/* ... Other content for recruiter mode ... */}
                            </>
                        )}

                        {/* End Switch Section */}
                    </div>
                </header>
                <div className="flex mt-20 ml-8 m-auto object-bottom hidden md:block">
                    {mode === "personal" ? (
                        <img
                            src="https://i.postimg.cc/SNMv2FkR/fotor-2023-3-15-0-4-55.jpg"
                            alt="me"
                            title="MeOnDaPhotoShoot"
                            className="border rounded border-[#2c2c2c] dark:border-gray-400"
                        />
                    ) : (
                        <img
                            src="https://i.postimg.cc/3wCXfPHh/Isaac-Lockwood-Resume.png"
                            alt="resume"
                            title="ResumeImage"
                            className="border rounded border-[#2c2c2c] dark:border-gray-400 bg-white"
                        />
                    )}
                </div>
            </div>
            <div className="flex w-full h-auto m-auto mx-auto mt-8 md:hidden justify-center">
                {mode === "personal" ? (
                    <img
                        src="https://i.postimg.cc/SNMv2FkR/fotor-2023-3-15-0-4-55.jpg"
                        alt="me"
                        title="MeOnDaPhotoShoot"
                        className="border rounded border-[#2c2c2c] dark:border-gray-400"
                    />
                ) : (
                    <img
                        src="https://i.postimg.cc/3wCXfPHh/Isaac-Lockwood-Resume.png"
                        alt="resume"
                        title="ResumeImage"
                        className="border rounded border-[#2c2c2c] dark:border-gray-400 bg-white"
                    />
                )}
            </div>
        </>
    );
}

export default About;
