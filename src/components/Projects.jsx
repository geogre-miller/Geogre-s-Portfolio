import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <article key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                {project.role}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </a>
              <p className="mb-3 leading-7 text-stone-400">
                {project.description}
              </p>
              <p className="mb-5 border-l-2 border-cyan-300 pl-4 text-stone-200">
                {project.impact}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mb-2 mr-2 inline-flex rounded-full bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
