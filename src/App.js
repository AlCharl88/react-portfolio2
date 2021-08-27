import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Components/Navbar";
// import { Container } from 'reactstrap';
import About from './Components/Pages/AboutMe';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
// import Footer from "./components/Footer";

library.add(faEnvelope, faCodeBranch);

function App() {
  return (
      <>
        <Router basename='/react-portfolio2'>
          <Navbar />
            <Switch>
              <Route path="/" exact component={About}/>
              <Route path="/projects" exact component={Projects}/>
            <Route path="/contact" exact component={Contact}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
