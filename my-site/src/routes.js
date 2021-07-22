import React from 'react';
import Homepage from './views/Homepage';
import Services from './views/Services';
import Aboutpage from './views/About';
import Projects from './views/Projects';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={Aboutpage} />
      </Switch>
    </div>
  );
};