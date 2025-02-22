import { projects } from "../../data/data";

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-700 md:flex md:flex-col md:justify-center md:min-h-screen" id="projects">
      <div className="py-12 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;