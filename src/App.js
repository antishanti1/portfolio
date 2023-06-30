import "./App.scss";
import Nav from "../src/components/Nav/Nav";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Slide1 from "./components/Slide1/Slide1";
import Expirience from "./components/Expirience/Expirience";
import MainTop from "./components/MainTop/MainTop";

function App() {
  return (
    <div className="app">
      <Nav />
      <section id="home">
        <Main />
      </section>
      <section>
        <MainTop />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />{" "}
      </section>
      <section>
        <Slide1 />
      </section>
      <section>
        <Expirience />
      </section>
      <section id="contact">
        <Contact />{" "}
      </section>
      <Footer />
    </div>
  );
}

export default App;
