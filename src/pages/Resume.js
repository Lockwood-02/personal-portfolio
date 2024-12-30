import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Resume() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center h-screen bg-white">
                <img
                    src="https://i.postimg.cc/XNDqxgXX/Isaac-Lockwood-Resume.png"
                    alt="Isaac Lockwood Resume"
                    className="max-w-full h-auto shadow-lg"
                />
                <Link
                    to="/about"
                    className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-all duration-300 mt-8"
                >
                    Back
                </Link>
            </div>
        </>
    );
}

export default Resume;
