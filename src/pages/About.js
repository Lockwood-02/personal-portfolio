import Header from "../components/Header";

function About() {
    return (
        <>
            <Header />
            <div className="flex justify-between m-auto text-center md:text-left">
                <header className="relative">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mt-32">About me</h1>
                        <p className="text-xl mt-8">
                            Currently, I am a student at Western Kentucky University. I am a senior working towards my
                            Bachelors and Masters in computer science within a joint program. I like to create applications
                            and websites during my freetime as it keeps my skills honed and my mind focused and motivated.
                        </p>
                        <p className="text-xl mt-8">
                            I consider myself a "forever student," eager to both build my knowledge over the vast spectrum
                            of computer science and staying on top of the most recent developments in the computer science
                            industry.
                        </p>
                        <p className="text-xl mt-8">
                            Right now I am open looking for work. If you would like to get in touch with me you can email me
                            at <a href="mailto:isaaclockwood618@gmail.com" className="text-amber-500 underline hover:bg-amber-500 hover:text-stone-300">
                                isaaclockwood618@gmail.com</a> You can also view my resume <a href="https://docs.google.com/document/d/1ocPddHSScaqN3ZLxyrtEIY3cpP6V80Je0LxbB-anp9Q/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-amber-500 underline hover:bg-amber-500 hover:text-stone-300">
                                here.</a>
                        </p>
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
    )
}

export default About;