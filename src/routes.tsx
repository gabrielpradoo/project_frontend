import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Vessels from './Pages/Vessels';
import Booking from './Pages/Booking';
import Water from './Pages/Water';
import Earth from './Pages/Earth';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sobre" component={About} />
        <Route path="/experiencia" component={Experience} />
        <Route path="/embarcacoes" component={Vessels} />
        <Route path="/reservas" component={Booking} />
        <Route path="/agua" component={Water} />
        <Route path="/terra" component={Earth} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
