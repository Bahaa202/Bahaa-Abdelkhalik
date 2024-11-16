import "./App.css";
import { ThemeProvider } from "./common/ThemeContext";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/projects/Project.jsx";
import Skills from "./sections/Skills/Skills.jsx";

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
