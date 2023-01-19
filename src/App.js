import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
