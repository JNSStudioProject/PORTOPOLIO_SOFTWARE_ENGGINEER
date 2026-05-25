import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="noise-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
