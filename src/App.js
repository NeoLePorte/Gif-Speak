import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import { NavLink, Switch, Route } from 'react-router-dom';

    const App = () => (
      <div className='app'>
        <h1>Gif Speak</h1>
        <Navigation />
        <Main />
      </div>
    )

    const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink to='/'>Gif Speak</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    )

    
    const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </Switch>
    )

    export default App;
