import React from 'react';
import './App.CSS';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/pages/Index';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import About from './components/pages/About';


function App() {
  return (
    <>
    <Router basename='/reactportfolio'>
      <Header />
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/Work' exact component={Work}/>
        <Route path='/Contact' exact component={Contact}/>
        <Route path='/About' exact component={About}/>
      </Switch>
    </Router>
    
  </>
  );
}

export default App;

export default App;
