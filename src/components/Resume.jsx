import { Download, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-line ">
      <div className="section-shell">
        <SectionHeading
          label="Resume"
          
        />

        
          
<div className="surface flex flex-col items-start justify-between gap-6 rounded-lg p-8 md:flex-row md:items-center">
 <div>
    <h3 className="text-2xl font-bold text-white ">
      Resume
    </h3>

    <p className="mt-2 max-w-2xl text-slate-300">
      View or download my latest resume to learn more about my
      education, projects, and technical skills.
    </p>
  </div>

  <div className="flex flex-wrap gap-4">
    <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring inline-flex items-center gap-2 rounded-md bg-mint px-5 py-3 font-medium text-black transition hover:bg-cyan"
    >
      View Resume
    </a>

    <a
      href={profile.resumeUrl}
      download
      className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-medium text-white transition hover:bg-white/10"
    >
      Download <Download size={18} />
    </a>
  </div>
</div>
  
        
      </div>
    </section>
  );
}
