
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Main from '../src/components/Nav/Main/Main';
import Projects from './components/Nav/Projects/Projects';

function App() {
  return (
    <div className="App">
     <Nav />
     <Main />
     <Projects />
    </div>
  );
}

export default App;
