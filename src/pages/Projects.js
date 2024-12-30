import Header from "../components/Header";
import projectitem from "../data/projectitem";
import PortfolioItem from "../components/PortfolioItem";

function Projects() {
    return (
        <>
            <Header />
            <div>
                <h1 className="text-5xl font-bold mt-32 mb-8">Projects</h1>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projectitem.map((project, index) => (
                            <PortfolioItem
                                key={index}
                                id={index} // Using index as a unique identifier
                                image={project.image}
                                title={project.title}
                                stack={project.stack}
                                link={project.link}
                                description={project.description}
                                live={project.live}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
