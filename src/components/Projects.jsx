import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

function DetailList({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white">{title}</h4>

      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projects" className="border-b border-line">
      <div className="section-shell">
        <SectionHeading
          label="Projects"
          title="Practical projects that turn learning into proof."
          copy="Each card includes context, implementation goals, challenges, and next improvements so recruiters can see how I think while building."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <motion.article
                key={`${project.name}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                className="surface rounded-lg p-6"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>

                  <button
                    type="button"
                    onClick={() => toggleProject(index)}
                    aria-label={
                      isOpen
                        ? `Hide ${project.name} details`
                        : `View ${project.name} details`
                    }
                    className="flex shrink-0 items-center gap-2 rounded-md text-sm font-medium text-mint transition hover:opacity-80"
                  >
                    <span>
                      {isOpen ? "Hide Details" : "View Details"}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Short Summary */}
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-5 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-mint"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-mint"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <h4 className="text-sm font-bold text-white">
                            Why I Built It
                          </h4>

                          <p className="mt-3 text-sm leading-6 text-slate-300">
                            {project.why}
                          </p>
                        </div>

                        <DetailList
                          title="Features"
                          items={project.features}
                        />

                        <DetailList
                          title="Challenges"
                          items={project.challenges}
                        />

                        <DetailList
                          title="What I Learned"
                          items={project.learned}
                        />

                        <DetailList
                          title="Future Improvements"
                          items={project.future}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
