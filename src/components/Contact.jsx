import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Valid email is required.";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";

    return nextErrors;
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  const nextErrors = validate();
  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) {
    setSubmitted(false);
    return;
  }

  try {
    const response = await fetch(
      "https://emailservice-kveq.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSubmitted(true);
    setForm(initialForm);
  } catch (error) {
    console.error("Contact form error:", error);
    setSubmitted(false);
  }
};

  return (
    <section id="contact" className="border-b border-line bg-panel/35">
      <div className="section-shell">
        <SectionHeading
          label="Contact"
          title="Open to backend opportunities and learning-focused collaborations."
          copy="Use the contact details or the form UI below. The form currently validates input on the frontend and can be connected to a backend or form service later."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface rounded-lg p-6">
            <div className="space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-300 hover:text-mint">
                <Mail size={20} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-slate-300 hover:text-mint">
                <Phone size={20} /> {profile.phone}
              </a>
              <p className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} /> {profile.location}
              </p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-cyan">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-mint">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="surface rounded-lg p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-white">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  className="focus-ring mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-white"
                  placeholder="Your name"
                />
                {errors.name && <span className="mt-2 block text-xs text-red-300">{errors.name}</span>}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-white">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  className="focus-ring mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-white"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="mt-2 block text-xs text-red-300">{errors.email}</span>}
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-white">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows="6"
                className="focus-ring mt-2 w-full resize-none rounded-md border border-line bg-ink px-4 py-3 text-sm text-white"
                placeholder="Write your message..."
              />
              {errors.message && <span className="mt-2 block text-xs text-red-300">{errors.message}</span>}
            </label>

            <button type="submit" className="focus-ring mt-6 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink hover:bg-cyan">
              Send Message
            </button>

            {submitted && <p className="mt-4 text-sm font-medium text-mint"> Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
