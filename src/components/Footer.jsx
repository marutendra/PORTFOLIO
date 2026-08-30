import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring rounded-md border border-line p-3 text-slate-300 hover:text-mint" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded-md border border-line p-3 text-slate-300 hover:text-cyan" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
