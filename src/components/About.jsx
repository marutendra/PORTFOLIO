import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { learningTimeline } from "../data/learning";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="section-shell">
        <SectionHeading
          label="About"
          title="Backend-focused, learning-driven, project-oriented."
          copy="I am growing as a Java backend developer by pairing strong fundamentals with practical implementation. I enjoy breaking down backend concepts, building REST APIs, and improving through consistent learning."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {learningTimeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="surface rounded-lg p-5"
            >
              <CalendarDays className="mb-5 text-mint" size={24} />
              <p className="font-mono text-xs uppercase text-cyan">{item.period}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
