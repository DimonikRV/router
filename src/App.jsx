import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Users from './components/users/Users';

const App = () => {
  return (
    <div className="page">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
