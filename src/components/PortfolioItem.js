import React from "react";
import { Link } from "react-router-dom";

function PortfolioItem({ image, title, stack, link, description, id, live }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl dark:shadow-[#000] relative mb-8">
            <img className="w-full h-48" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title} <br />
                    {stack.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 text-sm dark:border-white rounded-md mr-1 mt-2"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-gray-700 text-base dark:text-stone-200 h-[30px] overflow-hidden text-ellipsis">
                    {description}
                </p>
            </div>
            {/* Ensure consistent spacing below description */}
            <div className="px-6 pt-4 pb-4 mt-12 flex justify-between items-center">
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-2 py-1 font-semibold border-2 border-amber-500 dark:border-amber-500 rounded-md hover:bg-amber-500"
                >
                    Source
                </a>
                {/* Conditionally render the Live button */}
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-2 py-1 font-semibold border-2 border-green-500 dark:border-green-500 rounded-md hover:bg-green-500"
                    >
                        Live
                    </a>
                )}
                <Link
                    to={`/project-details/${id}`}
                    className="inline-block px-2 py-1 font-semibold border-2 border-blue-500 dark:border-blue-500 rounded-md hover:bg-blue-500"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}

export default PortfolioItem;
