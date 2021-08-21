import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Name />
      <Footer />
    </>
  );
}

export default App;
