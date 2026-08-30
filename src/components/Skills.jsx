import { Database, Server, Wrench, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const icons = {
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  "Frontend Basics": Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-panel/35">
      <div className="section-shell">
        <SectionHeading
          label="Skills"
          title="Tools and technologies I am building with."
          copy="My current stack is centered on Java backend development, relational databases, API tooling, and frontend basics for simple UI work."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = icons[group.title] || Code2;

            return (
              <article key={group.title} className="surface rounded-lg p-5">
                <Icon className="text-mint" size={26} />
                <h3 className="mt-5 text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
