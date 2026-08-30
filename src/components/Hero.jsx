import { ArrowDown, Download, Github, Linkedin, Route } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import useTypingEffect from "../hooks/useTypingEffect";

export default function Hero() {
  const typedText = useTypingEffect(profile.typingPhrases);

  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(65,230,167,0.12),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(68,199,244,0.11),transparent_24%)]" />
      <div className="section-shell relative grid min-h-[calc(100vh-73px)] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="section-label">Java Backend Developer</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium text-cyan sm:text-xl">{profile.subtitle}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>

          <div className="mt-7 min-h-8 font-mono text-sm text-mint sm:text-base">
            <span>{typedText}</span>
            <span className="ml-1 animate-pulse">|</span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:bg-cyan"
            >
              View Projects <ArrowDown size={18} />
            </a>
            <a
              href="#learning"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-bold text-white transition hover:border-mint hover:text-mint"
            >
              Learning Journey <Route size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-bold text-white transition hover:border-cyan hover:text-cyan"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring rounded-md border border-line p-3 text-slate-300 transition hover:text-mint" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded-md border border-line p-3 text-slate-300 transition hover:text-cyan" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="surface rounded-lg p-5"
        >
          <div className="rounded-md border border-line bg-ink p-4 font-mono text-sm leading-7 text-slate-300">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber" />
              <span className="h-3 w-3 rounded-full bg-mint" />
            </div>
            <p><span className="text-cyan">class</span> Developer &#123;</p>
            <p className="pl-4"><span className="text-mint">focus</span> = "Java Backend";</p>
            <p className="pl-4"><span className="text-mint">stack</span> = ["Spring Boot", "MySQL", "REST APIs"];</p>
            <p className="pl-4"><span className="text-mint">mindset</span> = "learn, build, improve";</p>
            <p>&#125;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
