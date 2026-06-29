import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import ProfessionalPrograms from "./components/ProfessionalPrograms";
import ResearchPaper from "./components/ResearchPaper";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="text-white overflow-x-hidden" style={{ background: "#080b1a" }}>

      {/* ── Global RCB background – fixed behind everything ── */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{
          background: "linear-gradient(160deg, #0d1330 0%, #1a0a0a 55%, #2d0505 100%)"
        }} />
        <div className="absolute top-0 left-0 w-[70vw] h-[70vh]" style={{
          background: "radial-gradient(ellipse at top left, rgba(30,58,138,0.45) 0%, transparent 65%)"
        }} />
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vh]" style={{
          background: "radial-gradient(ellipse at bottom right, rgba(220,38,38,0.35) 0%, transparent 65%)"
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "repeating-linear-gradient(135deg, #c8a84b 0px, #c8a84b 1px, transparent 1px, transparent 40px)"
        }} />
        <div className="absolute top-[40%] right-0 w-[50vw] h-[50vh]" style={{
          background: "radial-gradient(ellipse at right, rgba(200,168,75,0.06) 0%, transparent 70%)"
        }} />
        <div className="absolute top-[70%] left-0 w-[50vw] h-[50vh]" style={{
          background: "radial-gradient(ellipse at left, rgba(30,58,138,0.15) 0%, transparent 70%)"
        }} />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Internships />
        <ProfessionalPrograms />
        <ResearchPaper />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
