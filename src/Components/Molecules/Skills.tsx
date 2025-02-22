import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 md:flex md:flex-col md:justify-center md:min-h-screen" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-gray-900 dark:text-white font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;