import './App.css';
import Navbar from './Component/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Content/Home';
import About from './Content/About';
import Education from './Content/Education';
import Contact from './Content/Contact';
import Skill from './Content/Skill';

function App() {
  return (
    <Router>
      <div className="App bg-Mana navbar-expand-lg">
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/education">
          <Education />
        </Route>

        <Route exact path="/skill">
          <Skill/>
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </div>
    </Router>
  );
}

export default App;
