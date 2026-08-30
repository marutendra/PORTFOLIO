import { BookOpenCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { currentlyLearning } from "../data/currentlyLearning";

export default function CurrentlyLearning() {
  return (
    <section className="border-b border-line bg-panel/35">
      <div className="section-shell">
        <SectionHeading
          label="Now Learning"
          title="Topics currently on my roadmap."
          copy="I am expanding from Spring Boot fundamentals toward secure, documented, deployable, and scalable backend systems."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {currentlyLearning.map((item) => (
            <article key={item.title} className="surface rounded-lg p-5">
              <BookOpenCheck className="text-cyan" size={26} />
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
