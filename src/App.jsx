import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import LearningJourney from "./components/LearningJourney.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Stats from "./components/Stats.jsx";
import CurrentlyLearning from "./components/CurrentlyLearning.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Header />
      <main>
         <CustomCursor />
        <Hero />
        <About />
        <LearningJourney />
        <Projects />
        <Skills />
        <Stats />
        <CurrentlyLearning />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
