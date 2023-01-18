import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
