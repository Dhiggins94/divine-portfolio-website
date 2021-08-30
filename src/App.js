// import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home'
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/AboutMe">
        <AboutMe />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/Projects">
        <Projects />
      </Route>
      <Route exact path="/Resume">
        <Resume />
      </Route>
    </div>
  );
}

export default App;
