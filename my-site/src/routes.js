import React from 'react';
import Homepage from './views/Homepage';
import Services from './views/Services';
import Aboutpage from './views/About';
import Projects from './views/Projects';
import Contactpage from './views/Contactpage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer'
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
        <Route exact path="/contact" component={Contactpage} />
      </Switch>
      <Footer />
    </div>
  );
};