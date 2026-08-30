import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { learningTopics } from "../data/learning";

export default function LearningJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="learning" className="border-b border-line bg-panel/35">
      <div className="section-shell">
        <SectionHeading
          label="Learning Journey"
          title="A clear view of what I have studied."
          copy="This section is intentionally detailed because it shows my learning path, backend foundation, and commitment to steady improvement."
        />

        <div className="mt-12 space-y-4">
          {learningTopics.map((group, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={group.category} className="surface rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-mint">
                      <Layers3 size={22} />
                    </span>
                    <span>
                      <span className="block text-xl font-bold text-white">{group.category}</span>
                      <span className="mt-1 block text-sm text-slate-300">{group.summary}</span>
                    </span>
                  </span>
                  <ChevronDown className={`shrink-0 text-slate-300 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line p-5">
                        <div className="flex flex-wrap gap-2">
                          {group.topics.map((topic) => (
                            <span key={topic} className="chip">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
