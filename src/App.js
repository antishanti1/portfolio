import "./App.scss";
import Nav from "../src/components/Nav/Nav";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <section id="home">
        <Main />{" "}
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />{" "}
      </section>
      <section id="contact">
        <Contact />{" "}
      </section>
      <Footer />
    </div>
  );
}

export default App;
