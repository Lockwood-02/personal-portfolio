import React from "react";
import { useParams, Link } from "react-router-dom";
import projectitem from "../data/projectitem";
import Header from "../components/Header";

function ProjectDetails() {
    const { id } = useParams();
    const project = projectitem[id];

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <>
            <Header />
            <div className="p-8">
                {/* Back Arrow Link */}
                {/* <Link
                    to="/projects"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Projects
                </Link> */}

                {/* Project Details */}
                <h1 className="text-5xl font-bold mb-8">
                    <Link
                        to="/projects"
                        className="inline-flex items-center hover:text-blue-700 mb-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-7 h-9 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </Link>
                    {project.title}
                </h1>
                <img
                    className="w-full h-auto mb-8 rounded-lg"
                    src={project.image}
                    alt={project.title}
                />

                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                    <ul>
                        {project.stack.map((tech, index) => (
                            <li
                                key={index}
                                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 text-sm dark:border-white rounded-md mr-1 mt-2"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="text-gray-700 text-lg dark:text-stone-200 mt-4">
                    {project.details}
                </p>
                <div className="mt-8 flex gap-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
                    >
                        View Source on GitHub
                    </a>
                    {/* Conditionally render Live button */}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
                        >
                            View Live Demo
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;
